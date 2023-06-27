import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { auth } from "../../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { NavLink } from "react-router-dom";

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
        maxWidth: {
          xs: "90%",
          sm: 500,
        },
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
          <Grid>
            <Typography
              variant="h6"
              sx={{
                marginTop: "30px",
                marginLeft: "30px",
                color: "#9A98FE",
              }}
            >
              Login To MyAccount
            </Typography>
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
          <Grid display="flex" alignItems="center">
            <Typography
              variant="h6"
              sx={{
                marginBottom: "1px",
                marginLeft: "25px",
                marginRight: "10px",
                color: "#868688",
              }}
            >
              ¿Did you forget your password?
            </Typography>
            <NavLink to="/ResetPassword">Reset It!</NavLink>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                marginRight: "18px",
                marginBottom: "15px",
                borderRadius: "20px",
              }}
              sx={{
                backgroundColor: "#9A98FE",
                "&:hover": {
                  backgroundColor: "#c2c1fe",
                },
              }}
            >
              SIGN IN
            </Button>
          </Grid>
          <Grid>
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              variant="contained"
              sx={{
                backgroundColor: "#9A98FE",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#c2c1fe",
                },
              }}
            >
              <img
                src="https://i.ibb.co/tbN3WSH/pngwing-com.png"
                alt="logogoogle"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              SIGN IN with google Account
            </Button>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
