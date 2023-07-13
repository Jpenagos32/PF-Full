import React, { useContext, useState } from "react";
import axios from "axios";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import Select from "react-select";
import CountryList from "react-select-country-list";
import { useSelector } from "react-redux";
import { DateContext } from "../../Context/DateContex";
import { validation } from "./FormValidations";
import CryptoJS from "crypto-js";

const FormComponent = () => {
  const { startDate, endDate } = useContext(DateContext);
  const { child, adult, total } = useSelector((state) => state.booking);
  const check_in_date = startDate ? startDate.format("YYYY-MM-DD") : "";
  const check_out_date = endDate ? endDate.format("YYYY-MM-DD") : "";
  const childNumber = +child;
  const adultNumber = +adult;
  const amount_of_people = childNumber + adultNumber;
  const countryOptions = CountryList().getData();
  const room = useSelector((state) => state.types.types);
  const secretKey = "mySecretKey";

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    identification: "",
    billingAddress: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption,
    }));
  };

  const processReservations = async (response) => {
    let reservations = [];

    if (
      response.data.createHost &&
      response.data.createHost.reservations &&
      Array.isArray(response.data.createHost.reservations)
    ) {
      reservations = response.data.createHost.reservations;
    } else if (
      response.data.hostUpdated &&
      response.data.hostUpdated.reservations &&
      Array.isArray(response.data.hostUpdated.reservations)
    ) {
      reservations = response.data.hostUpdated.reservations;
    }

    if (reservations.length > 0) {
      const lastReservation = reservations[reservations.length - 1];
      const lastReservationId = lastReservation._id;
      return lastReservationId;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar el formulario
    const validationErrors = validation(formData);
    setErrors(validationErrors);
    // Comprobar si hay errores
    if (Object.keys(validationErrors).length === 0) {
      try {
        const PhoneNumber = +formData.phone;

        const requestData = {
          identification: formData.identification,
          first_name: formData.firstName,
          last_name: formData.lastName,
          contact: {
            email: formData.emailAddress,
            phone: PhoneNumber,
            address: formData.billingAddress,
            country: formData.country.label,
            city: formData.city,
            zip_code: formData.zipCode,
          },
          check_in_date: check_in_date,
          check_out_date: check_out_date,
          amount_of_people: amount_of_people,
          type_of_guest: {
            adult: adultNumber,
            children: childNumber,
            baby: 0,
            pets: 0,
          },
          room_number: room.room_number,
        };

        const requestDataForPay = {
          total: total,
          identification: formData.identification,
        };

        const response = await axios.post("/hosts", requestData);
        const reservationnumber = await processReservations(response);

        const saveDataToLocalStorage = async () => {
          const data = {
            reservationnumber: reservationnumber,
            firstName: formData.firstName,
            lastName: formData.lastName,
            check_in_date: check_in_date,
            check_out_date: check_out_date,
            amount_of_people: amount_of_people,
            room_number: room.room_number,
            room_name: room.name,
            image_bed: room.image.bed,
            room_type: room.room_type,
          };

          // Convertir el objeto a una cadena JSON
          const dataString = JSON.stringify(data);

          // Encriptar los datos utilizando AES
          const encryptedData = CryptoJS.AES.encrypt(
            dataString,
            secretKey
          ).toString();

          // Guardar los datos encriptados en el localStorage
          localStorage.setItem("encryptedData", encryptedData);
        };

        if (response.status === 200) {
          await saveDataToLocalStorage(); // Esperar la finalización de la encriptación

          const responsePay = await axios.post("/payments", requestDataForPay);
          const paymentLink = responsePay.data.init_point;

          setFormData({
            firstName: "",
            lastName: "",
            emailAddress: "",
            phone: "",
            billingAddress: "",
            identification: "",
            city: "",
            country: "",
            zipCode: "",
          });
          window.location.href = paymentLink;
        }
      } catch (error) {
        console.log("Error al realizar la solicitud:", error);
      }
    } else {
      console.log("Errores de validación:", validationErrors);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "0 auto",
        marginTop: "20px",
        marginLeft: "170px",
        padding: "20px",
        paddingLeft: "25px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5.9}>
            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={5.9}>
            <TextField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={5.9}>
            <TextField
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={5.9}>
            <TextField
              name="identification"
              label="Identity card Number or DNI number"
              value={formData.identification}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.identification}
              helperText={errors.identification}
            />
          </Grid>
          <Grid item xs={11.8}>
            <TextField
              name="emailAddress"
              label="Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.emailAddress}
              helperText={errors.emailAddress}
            />
          </Grid>
          <Grid item xs={11.8}>
            <TextField
              name="billingAddress"
              label="Billing Address"
              value={formData.billingAddress}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.billingAddress}
              helperText={errors.billingAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="city"
              label="City"
              value={formData.city}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={5.8}>
            <TextField
              name="zipCode"
              label="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
              fullWidth
              error={!!errors.zipCode}
              helperText={errors.zipCode}
            />
          </Grid>
          <Grid item xs={10} sm={11.8}>
            <FormControl fullWidth>
              <Select
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                options={countryOptions}
                placeholder="Country"
                required
                error={!!errors.country}
                helperText={errors.country}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "35%",
              borderRadius: "30px",
              height: "45px",
              color: "#white",
              backgroundColor: "#9A98FE",
              "&:hover": {
                backgroundColor: "#c2c1fe",
              },
            }}
          >
            Pay Reservation
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormComponent;
