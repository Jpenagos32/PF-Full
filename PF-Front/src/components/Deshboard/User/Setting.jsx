import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Select from "react-select";
import CountryList from "react-select-country-list";

const countryOptions = CountryList().getData();

const Setting = ({ userData }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    billingAddress: "",
    city: "",
    country: "",
    zipCode: "",
  });
  console.log(userData.user_email);

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
      country: selectedOption.label,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formData);
      const apiResponse = await axios.put("/users", {
        email: userData.user_email,
        name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        billing_adress: formData.billingAddress,
        city: formData.city,
        zip_code: formData.zipCode,
        country: formData.country,
      });
    
      console.log("Update successful",apiResponse );
      setOpenAlert(true);
      // Restablecer el formulario
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        billingAddress: "",
        city: "",
        country: "",
        zipCode: "",
      });
    } catch (error) {
      console.error("Error To update:", error);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  return (
    <Box
      sx={{
        maxWidth: {
          xs: "90%",
          sm: 800,
        },
        margin: "0 auto",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "1px",
        padding: "40px",
        paddingLeft: "40px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h6"
          sx={{
            marginTop: "-20px",
            marginLeft: "2px",
            marginBottom: "2px",
            color: "#9A98FE",
          }}
        >
          Update Profile
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={11.8} sm={4}>
            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={11.8} sm={4}>
            <TextField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              name="billingAddress"
              label="Billing Address"
              value={formData.billingAddress}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="city"
              label="City"
              value={formData.city}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="zipCode"
              label="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={10} sm={12}>
            <FormControl fullWidth>
              <Select
                name="country"
                value={
                  formData.country
                    ? {
                        value: formData.country,
                        label: formData.country,
                      }
                    : null
                } // Establecer el valor con un objeto en el formato { value: "código", label: "nombre" }
                onChange={handleCountryChange}
                options={countryOptions}
                placeholder="Country"
                isClearable
                isSearchable
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "10px" }}>
          <Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                marginRight: "18px",
                marginBottom: "-30px",
                borderRadius: "20px",
              }}
              sx={{
                backgroundColor: "#9A98FE",
                "&:hover": {
                  backgroundColor: "#c2c1fe",
                },
              }}
            >
              Update
            </Button>
          </Grid>
        </Box>
      </form>
      <Snackbar
        open={openAlert}
        autoHideDuration={9000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "80%", backgroundColor: "#A5D6A7" }}
        >
          Your Profile Was Updated Correctly Refresh The page!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Setting;
