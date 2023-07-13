import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { auth } from "../../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { validation } from "./LoginValidation";
import { setUser } from "../../redux/slices/authSlice";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const encryptData = (text, secretKey) => {
    const encodedText = btoa(text);
    return encodedText;
  };

  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  const [errorOpen, setErrorOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseAlert = () => {
    setErrorOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { emailAddress, password } = formData;

    const validationErrors = validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          emailAddress,
          password
        );

        let userEmail = "";

        if (response.operationType === "signIn") {
          userEmail = response.user.email;

          const encryptedEmail = encryptData(userEmail, "secretKey");
          localStorage.setItem("user", encryptedEmail);

          dispatch(setUser(encryptedEmail));
        }

        setFormData({
          emailAddress: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/myaccount");
        }, 1000);
      } catch (error) {
        console.error("Error To sign In:", error);
        setErrorOpen(true);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);

      let userEmail = "";
      let emailAlreadyExists = false; // Variable para indicar si el correo electrónico está registrado

      if (response.operationType === "signIn") {
        userEmail = response.user.email;

        // Verificar si el correo electrónico ya está registrado
        const existingUserResponse = await axios.get("/users");
        const existingUsers = existingUserResponse.data;

        emailAlreadyExists = existingUsers.some(
          (user) => user.user_email === userEmail
        );
      }

      if (!emailAlreadyExists) {
        // Si el correo electrónico no está registrado, continuar con el proceso de registro
        const apiResponse = await axios.post("/users", {
          user_email: userEmail,
          user_type: ["user"],
        });
      }

      const encryptedEmail = encryptData(userEmail, "secretKey");
      localStorage.setItem("user", encryptedEmail);

      dispatch(setUser(encryptedEmail));

      setFormData({
        emailAddress: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/myaccount");
      }, 1000);
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              type="password"
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center">
            <Typography
              variant="h6"
              sx={{
                marginBottom: "1px",
                marginLeft: "25px",
                marginRight: "10px",
                color: "#868688",
              }}
            >
              Did you forget your password?
            </Typography>
            <NavLink to="/ResetPassword">Reset It!</NavLink>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
              SIGN IN with Google Account
            </Button>
          </Grid>
        </Box>
        <Snackbar
          open={errorOpen}
          autoHideDuration={5000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          style={{ marginTop: "60px" }}
        >
          <Alert
            onClose={handleCloseAlert}
            severity="error"
            sx={{ width: "80%", backgroundColor: "#f55d60" }}
          >
            Error To Sign In , Check Your Email And Password!
          </Alert>
        </Snackbar>
      </form>
    </Box>
  );
};

export default Login;
