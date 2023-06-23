import React, { useState } from "react";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";

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


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(formData);
    setFormData({
      emailAddress: "",
      password: "",
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
          <Button type="submit" variant="contained" color="primary">
            SIGN IN
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;


