import * as React from "react";
import { Grid, Typography, Card } from "@mui/material";
import { useSelector } from "react-redux";


const DetailDescription = () => {
  const { name, room_type, price, room_description, facilities} = useSelector((state) => state.types.types)
  
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#EFEEFF",
          height: "auto",
          padding: "40px",
          margin: "20px",
          width: "890px",
        }}
      >
        <Grid container spacing={2} style={{ padding: "10px" }}>
          <Grid item xs={12} sm={7}>
            <Typography
              item
              variant="h1"
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "#868688",
              }}
            >
              {name}
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
              {room_type}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5}
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "35px",
                fontWeight: "bold",
                color: "#0400CB",
              }}
            >
              ${price}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#9A98FE",
                marginTop: "20px",
              }}
            >
              USD/NIGHT
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="flex-start"
          style={{
            marginTop: "20px",
            borderTop: "1px solid",
            marginBotton: "5px",
            color: "#9A98FE",
          }}
        >
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#0400CB",
                marginTop: "20px",
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
              {room_description}
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

            <Grid container spacing={1} style={{ marginTop: "0px" }}>
              <Grid item xs={12} sm={6}>
                {facilities.map((facility, index) => (
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
              Please read and understand our cancellation policy prior to
              booking.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              padding: "15px",
            }}
          >
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default DetailDescription;
