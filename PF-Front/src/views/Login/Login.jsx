import React, { useState } from "react";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { auth } from "../../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { emailAddress, password } = formData;
      const response = await signInWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      console.log(response);

      setFormData({
        emailAddress: "",
        password: "",
      });
    } catch (error) {
      console.log("Error al iniciar sesión:");
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
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginRight: "18px" }}
          >
            SIGN IN
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
            SIGN IN with google
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
