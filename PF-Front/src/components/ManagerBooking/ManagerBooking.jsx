import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { format } from "date-fns";

const ReservationInfo = ({ filteredHost, filteredBooking }) => {
  const checkInDate = new Date(filteredBooking.room_check_in);
  checkInDate.setDate(checkInDate.getDate() + 1);
  const formattedCheckInDate = format(checkInDate, "dd-MM-yyyy");

  const checkOutDate = new Date(filteredBooking.room_check_out);
  checkOutDate.setDate(checkOutDate.getDate() + 1);
  const formattedCheckOutDate = format(checkOutDate, "dd-MM-yyyy");

  return (
    <Box
      sx={{
        maxWidth: {
          xs: "90%",
          sm: 450,
        },
        margin: "0 auto",
        marginTop: "50px",
        marginLeft: {
          xs: "5%",
          sm: "30%",
        },
        padding: "20px",
        paddingLeft: "25px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        background: "#ededed",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginTop: "1px",
          marginLeft: "5px",
          color: "#9A98FE",
          fontSize: "30px",
        }}
      >
        Reservation Information
      </Typography>
      <Divider sx={{ marginBottom: "20px" }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              First Name:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#868688",
              }}
            >
              {filteredHost.first_name}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              Last Name:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#868688",
              }}
            >
              {filteredHost.last_name}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              Check In Date:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#868688",
              }}
            >
              {formattedCheckInDate}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              Check Out Date:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#868688",
              }}
            >
              {formattedCheckOutDate}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            marginTop: "35px",
          }}
        >
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              Room Name:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#868688",
              }}
            >
              {filteredBooking.room_name}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              Room Type:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#868688",
              }}
            >
              {filteredBooking.room_type}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#9A98FE",
              }}
            >
              Room Number:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0px",
                marginLeft: "8px",
                color: "#868688",
              }}
            >
              {filteredBooking.room_number}
            </Typography>
          </Box>
          {/* Resto de los campos en la segunda columna */}
        </Grid>
      </Grid>
    </Box>
  );
};

const ManagerBooking = () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
    reservationNumber: "",
  });
  const [filteredHost, setFilteredHost] = useState(null);
  const [filteredBooking, setfilteredBooking] = useState(null);

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
      const response = await axios.get("/hosts");
      const hosts = response.data.hosts;

      const matchingHost = hosts.find((host) => {
        const matchingReservation = host.reservations.find(
          (reservation) => reservation._id === reservationNumber
        );
        return matchingReservation !== undefined;
      });

      if (matchingHost) {
        const matchingReservation = matchingHost.reservations.find(
          (reservation) => reservation._id === reservationNumber
        );
        setFilteredHost(matchingHost);
        setfilteredBooking(matchingReservation);
      } else {
        setFilteredHost(null);
        alert("No Reservation Found With The Information Provided");
      }

      setFormData({
        emailAddress: "",
        reservationNumber: "",
      });
    } catch (error) {
      console.error("Error al buscar el host:", error);
    }
  };

  return (
    <div>
      {filteredHost ? (
        <ReservationInfo
          filteredHost={filteredHost}
          filteredBooking={filteredBooking}
        />
      ) : (
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
                marginLeft: { xs: "20px", sm: "20%", md: "-1%" },
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
                    Don't know your confirmation number? Your confirmation
                    number is included in the email sent to you at the time you
                    made your reservation. Check your email to retrieve the
                    number.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ManagerBooking;
