import React, { useContext, useState } from "react";
import axios from "axios";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import Select from "react-select";
import CountryList from "react-select-country-list";
import { useSelector } from "react-redux";
import { DateContext } from "../../Context/DateContex";

const FormComponent = () => {
  const { startDate, endDate } = useContext(DateContext);
  const { child, adult ,total} = useSelector((state) => state.booking);
  const check_in_date = startDate ? startDate.format("YYYY-MM-DD") : "";
  const check_out_date = endDate ? endDate.format("YYYY-MM-DD") : "";
  const childNumber = +child;
  const adultNumber = +adult;
  const amount_of_people = childNumber + adultNumber;
  const countryOptions = CountryList().getData();
  const room = useSelector((state) => state.types.types.room_type);

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

  const handleSubmit = async (event) => {
    const PhoneNumber = +formData.phone;
    event.preventDefault();

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
      room_type: room,
    };

    const requestDataForPay = {
      identification: formData.identification,
      total : total
    };

    try {
      const response = await axios.post(
        "https://pf-back-production-6a7d.up.railway.app/hosts",
        requestData
      );
      if (response.status === 200) {
        const response = await axios.post(
          "https://pf-back-production-6a7d.up.railway.app/payments",
          requestDataForPay
        );
        const paymentLink = response.data.init_point;
        window.location.href = paymentLink;
      }
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }

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
            />
          </Grid>
          <Grid item xs={5.9}>
            <TextField
              name="identification"
              label="Identification"
              value={formData.identification}
              onChange={handleChange}
              required
              fullWidth
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
