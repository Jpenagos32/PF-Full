import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { NavLink } from "react-router-dom";
import { validation } from "./ResetPasswordValidation";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
  });
  const [openAlert, setOpenAlert] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      emailAddress: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { emailAddress } = formData;
    const validationErrors = validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await sendPasswordResetEmail(auth, emailAddress);
        setOpenAlert(true);
        setFormData({ emailAddress: "" });
      } catch (error) {
        console.log(
          "Error al enviar el correo electrónico de restablecimiento:",
          error
        );
      }
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
                marginTop: "10px",
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              Reset Your Password
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                marginTop: "5px",
                marginLeft: "8px",
                color: "#868688",
              }}
            >
              Enter your email and we will send you a link to reset your
              password.
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
              error={!!errors.emailAddress}
              helperText={errors.emailAddress}
            />
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
              onClick={handleSubmit}
            >
              Restore
            </Button>
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              sx={{
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              You do not have an account ?
            </Typography>
            <NavLink to="/signup">Sign UP!</NavLink>
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
          Email sent successfully! Check your inbox for Reset Your Password.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ResetPassword;
