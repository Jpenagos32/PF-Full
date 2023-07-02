import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { LoadScript } from "@react-google-maps/api";
import React from "react";
const apiKey = "AIzaSyCv7ZMek1DLRWJ1NZbfA2-NfeOPMbEzH2M";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import { StyledDivider } from "../SubTotal/SubTotalStyled";
import { useSelector } from "react-redux";

const DetailDescription = () => {
  const room = useSelector((state) => state.types.types);
  console.log(room);

  return (
    <div>
      <Box
        sx={{
          width: "113.5%",
          padding: "20px",
          paddingLeft: "25px",
          border: "1px solid #ccc",
          backgroundColor: "#F3F3F7",
          marginTop: "-310px",
          marginLeft: "19px",
          marginBottom: "15px",
        }}
      >
        <Grid
          sx={{
            marginTop: "-10px",
            marginBottom: "-10px",
          }}
          container
          spacing={2}
        >
          <Grid sx={{ marginRight: "10px", width: "70%" }}>
            <Grid container alignItems="center">
              <Typography
                item
                variant="h1"
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#868688",
                  marginTop: "5px",
                  marginBottom: "-25px",
                }}
              >
                {room.name}
              </Typography>
              <Typography
                item
                variant="h1"
                sx={{
                  fontSize: "35px",
                  fontWeight: "bold",
                  color: "#0400CB",
                  marginTop: "5px",
                  marginBottom: "-35px",
                  marginLeft: "48%",
                }}
              >
                ${room.price}
              </Typography>

              <Typography
                item
                variant="h1"
                sx={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#9A98FE",
                  marginTop: "15px",
                  marginBottom: "-25px",
                  marginLeft: "1%",
                }}
              >
                USD/NIGHT
              </Typography>
            </Grid>
            <StyledDivider />
            <Grid container alignItems="flex-start" flexDirection="column">
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0400CB",
                  marginTop: "15px",
                }}
              >
                Description
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  color: "#C2C2C2",
                  marginTop: "1px",
                }}
              >
                {room.room_description}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0400CB",
                  marginTop: "15px",
                }}
              >
                Facilities
              </Typography>
              <Grid container spacing={1}>
                {room.facilities.map((facility, index) => (
                  <Grid item key={index}>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        color: "#C2C2C2",
                        marginTop: "1px",
                      }}
                    >
                      * {facility}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0400CB",
                  marginTop: "15px",
                }}
              >
                Cancellation policy
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  color: "#C2C2C2",
                  marginTop: "1px",
                }}
              >
                Please read and understand our cancellation policy prior to booking.
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ width: "25%" }}>
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap />
            </LoadScript>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DetailDescription;
