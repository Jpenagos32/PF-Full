import {
  Grid,
  Typography,
  Card
} from "@mui/material";
import { LoadScript } from "@react-google-maps/api";
import React from "react";
const apiKey = "AIzaSyCv7ZMek1DLRWJ1NZbfA2-NfeOPMbEzH2M";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import { useSelector } from "react-redux";

const DetailDescription = () => {
  const room = useSelector((state) => state.types.types);
  console.log(room);

  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#EFEEFF",
          height: 'auto',
          padding: '40px',
          margin: '20px',
          width: '890px'
        }}
      >
        <Grid container spacing={2} style={{ padding: '10px' }} >
          <Grid item xs={12} sm={7} >
            <Typography
              item
              variant="h1"
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "#868688",
              }}
            >
              {room.name}
            </Typography>

            <Typography
              item
              variant="h1"
              sx={{
                fontSize: "20px",
                color: "#868688",
                marginTop: "5px",

              }}
            >
              {room.room_type}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="h1"
              sx={{
                fontSize: '35px',
                fontWeight: 'bold',
                color: '#0400CB',
              }}>
              ${room.price}

            </Typography>

            <Typography variant="h1"
              sx={{
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#9A98FE',
                marginTop: '20px'
              }}>

              USD/NIGHT
            </Typography>
          </Grid>
        </Grid>


        <Grid container alignItems="flex-start" 
        style={{ 
          marginTop: '20px', 
          borderTop: '1px solid', 
          marginBotton: '5px', 
          color: '#9A98FE'
          }}>

          <Grid item xs={12} sm={8}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#0400CB",
                marginTop: '20px'
              }}
            >
              Description
            </Typography>

            <Typography
              variant="p"
              sx={{
                fontSize: "16px",
                color: "#C2C2C2",
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

            <Grid container spacing={1} style={{ marginTop: '0px' }}>
              <Grid item xs={12} sm={6}>
                {room.facilities.map((facility, index) => (
                  <Grid item key={index}>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "16px",
                        color: "#C2C2C2",
                      }}
                    >
                      {facility}
                    </Typography>
                  </Grid>

                ))}
              </Grid>
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
                color: "#C2C2C2",
                marginTop: "15px",
              }}
            >
              Please read and understand our cancellation policy prior to booking.
            </Typography>

          </Grid>

          <Grid item xs={12} sm={4} sx={{
                padding: '15px',
            
              }}>
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap />
            </LoadScript>
          </Grid>
        </Grid>


      </Card>
    </div>
  );
};

export default DetailDescription;
