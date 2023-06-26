import React, { useState } from "react";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import Select from "react-select";
import CountryList from "react-select-country-list";
import { auth, firestore } from "../../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {
        firstName,
        lastName,
        billingAddress,
        emailAddress,
        password,
        phone,
        city,
        zipCode,
        country,
      } = formData;

      // Crear el usuario en Firebase Authentication
      const response = await createUserWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      const user = response.user;

      // Guardar los datos en Firestore
      const usersRef = doc(firestore, "users", user.uid);
      await setDoc(usersRef, {
        emailAddress,
        firstName,
        lastName,
        billingAddress,
        city,
        phone,
        country,
        zipCode,
      });

      // Registro exitoso, realiza las acciones necesarias aquí
      console.log("Registro exitoso");
      await sendEmailVerification(user);
      // Restablecer el formulario
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
    } catch (error) {
      // Manejo de errores de registro
      console.error("Error de registro:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response);
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "0 auto",
        marginTop: "40px",
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginRight: "18px" }}
          >
            SIGN UP
          </Button>

          <Button
            type="button"
            onClick={handleGoogleSignIn}
            variant="contained"
            color="primary"
          >
            <img
              src="https://i.ibb.co/tbN3WSH/pngwing-com.png"
              alt="logogoogle"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
            CONTINUE with google
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
