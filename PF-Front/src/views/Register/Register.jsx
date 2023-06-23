import React, { useState } from "react";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import Select from "react-select";
import CountryList from "react-select-country-list";

const countryOptions = CountryList().getData();

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    phone: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      phone: "",
      billingAddress: "",
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
        marginTop : '40px',
        padding: "20px",
        paddingLeft: "25px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              type="password"
            />
          </Grid>
          <Grid item xs={11.8}>
            <TextField
              name="phone"
              label="Phone"
              value={formData.phone}
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
          <Button type="submit" variant="contained" color="primary">
            SIGN UP
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
