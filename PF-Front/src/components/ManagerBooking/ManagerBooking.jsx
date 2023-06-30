import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";

const ManagerBooking = () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
    reservationNumber: "",
  });
  const [filteredHost, setFilteredHost] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    const { emailAddress, reservationNumber } = formData;

    try {
      const response = await axios.get("http://localhost:3001/hosts");
      const hosts = response.data.hosts;

      const filteredHost = hosts.find(
        (host) =>
          host.contact.email === emailAddress && host._id === reservationNumber
      );

      setFilteredHost(filteredHost);
      setFormData({
        emailAddress: "",
        reservationNumber: "",
      });
    } catch (error) {
      console.error("Error al buscar el host:", error);
    }
  };

  console.log(filteredHost);

  return (
    <div>
      <Grid container spacing={1}>
        {/* Primer cuadro */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: {
                xs: "90%",
                sm: 450,
              },
              marginLeft: { xs: "20px", sm: "170px" },
              marginTop: "40px",
              padding: "20px",
              paddingLeft: "25px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "1px",
                    marginLeft: "8px",
                    color: "#9A98FE",
                  }}
                >
                  Manager Your Booking With Your Account
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    marginTop: "0px",
                    marginLeft: "8px",
                    color: "#868688",
                  }}
                >
                  Click the Sign In button to sign in to your account.
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Grid>
                <NavLink to="/signin">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      marginBottom: "15px",
                      borderRadius: "20px",
                      paddingLeft: "30px",
                      paddingRight: "35px",
                    }}
                    sx={{
                      backgroundColor: "#9A98FE",
                      "&:hover": {
                        backgroundColor: "#c2c1fe",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </NavLink>
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
          </Box>
        </Grid>

        {/* Segundo cuadro */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: {
                xs: "90%",
                sm: 450,
              },
              marginLeft: { xs: "20px", sm: "0" },
              marginTop: "40px",
              padding: "20px",
              paddingLeft: "25px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "1px",
                    marginLeft: "8px",
                    color: "#9A98FE",
                  }}
                >
                  Manager Your Booking With The Confirmation Number and Email
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="emailAddress"
                  label="Email Address"
                  value={formData.emailAddress}
                  required
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="reservationNumber"
                  label="Reservation Number"
                  value={formData.reservationNumber}
                  required
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSearch}
                  style={{
                    marginTop: "18px",
                    marginBottom: "15px",
                    borderRadius: "20px",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                    marginLeft: "160px",
                  }}
                  sx={{
                    backgroundColor: "#9A98FE",
                    "&:hover": {
                      backgroundColor: "#c2c1fe",
                    },
                  }}
                >
                  Search
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    marginTop: "0px",
                    marginLeft: "8px",
                    color: "#868688",
                  }}
                >
                  Don't know your confirmation number? Your confirmation number
                  is included in the email sent to you at the time you made your
                  reservation. Check your email to retrieve the number.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ManagerBooking;
