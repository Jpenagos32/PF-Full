import { Box, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
const secretKey = "mySecretKey";

const Success = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const retrieveDataFromLocalStorage = () => {
      const encryptedData = localStorage.getItem("encryptedData");

      if (encryptedData) {
        const decryptedDataBytes = CryptoJS.AES.decrypt(
          encryptedData,
          secretKey
        );
        const decryptedDataString = decryptedDataBytes.toString(
          CryptoJS.enc.Utf8
        );

        if (decryptedDataString) {
          const data = JSON.parse(decryptedDataString);

          setUserData(data);
        }
      }
    };

    retrieveDataFromLocalStorage();
  }, []);
  return (
    <Box
      sx={{
        maxWidth: {
          xs: "90%",
          sm: 900,
        },
        margin: "0 auto",
        marginTop: "20px",
        marginLeft: {
          xs: "5%",
          sm: "17%",
        },
        padding: "10px",
        marginBottom: "20px",
        paddingLeft: "25px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        background: "#ededed",
      }}
    >
      {userData && (
        <>
          <Typography
            variant="h6"
            sx={{
              marginTop: "1px",
              marginLeft: "290px",
              color: "#9A98FE",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Congratulations!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: "1px",
              marginLeft: "180px",
              color: "#9A98FE",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Your Reservation Is Confirmed
          </Typography>
          <Divider sx={{ marginBottom: "20px" }} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    marginTop: "15px",
                    marginLeft: "65px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Reservation Number:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "65px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.reservationnumber}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "15px",
                    marginLeft: "65px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  First Name:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "65px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.firstName}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    marginTop: "15px",
                    marginLeft: "65px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Last Name:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "65px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.lastName}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    marginTop: "15px",
                    marginLeft: "65px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Check In Date:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "65px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.check_in_date}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    marginTop: "15px",
                    marginLeft: "65px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Check Out Date:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "65px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.check_out_date}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "15px",
                    marginLeft: "65px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Number Of Guest:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "65px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.amount_of_people}
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
              <Box sx={{ marginBottom: "10px", marginLeft: "-48px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={userData.image_bed}
                  alt="Bed Image"
                  sx={{
                    marginTop: "-45px",
                    marginLeft: "-1px",
                    borderRadius: "15px",
                  }}
                />
                <Typography
                  sx={{
                    marginTop: "15px",
                    marginLeft: "175px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Room Name:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "175px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.room_name}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    marginTop: "-4px",
                    marginLeft: "128px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Room Type:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "128px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.room_type}
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  sx={{
                    marginTop: "-5px",
                    marginLeft: "127px",
                    color: "#9A98FE",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Room Number:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "-7px",
                    marginLeft: "128px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {userData.room_number}
                </Typography>
              </Box>
              {/* Resto de los campos en la segunda columna */}
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Success;
