import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
const secretKey = "mySecretKey";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rejected = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

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

  const updateRoomAvailability = async () => {
    try {
      if (userData.room_number) {
        const url = "/rooms";
        const data = {
          room_number: userData.room_number,
          available: true,
        };

        const response = await axios.put(url, data);

        if (response.status == 200) {
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }
      } else {
        console.error("Número de habitación no definido");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: {
          xs: "90%",
          sm: 800,
        },
        height: {
          xs: "200px",
          sm: "450px",
        },
        margin: "0 auto",
        marginTop: "40px",
        marginLeft: {
          xs: "5%",
          sm: "20%",
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
              marginLeft: "240px",
              color: "#9A98FE",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Your Payment Failed
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: "-1px",
              marginLeft: "260px",
              color: "#9A98FE",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Please Try Again
          </Typography>
          <Divider sx={{ marginBottom: "20px" }} />
          <Grid container spacing={2}>
            <Grid
              item
              sx={{
                marginTop: "35px",
              }}
            >
              <Box sx={{ marginBottom: "10px", marginLeft: "-48px" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://firebasestorage.googleapis.com/v0/b/sunsethotel-8df2b.appspot.com/o/6132009-PhotoRoom.png-PhotoRoom.png?alt=media&token=88d235f0-e721-4e92-a0ed-097590bf3ae1"
                  alt="Bed Image"
                  sx={{
                    marginTop: "-45px",
                    marginLeft: "50px",
                    borderRadius: "15px",
                  }}
                />
              </Box>
              {/* Resto de los campos en la segunda columna */}
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ marginBottom: "10px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "37px",
                    marginLeft: "65px",
                    color: "#868688",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  We have problems processing your payment, I invite you to try
                  your reservation again.
                </Typography>
                <Button
                  variant="contained"
                  onClick={updateRoomAvailability}
                  sx={{
                    width: "220px",
                    borderRadius: "30px",
                    height: "45px",
                    color: "#white",
                    marginTop: "45px",
                    marginLeft: "91px",
                    fontWeight: "bold",
                    backgroundColor: "#9A98FE",
                    "&:hover": {
                      backgroundColor: "#c2c1fe",
                    },
                  }}
                >
                  Try Reservation Again
                </Button>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Rejected;
