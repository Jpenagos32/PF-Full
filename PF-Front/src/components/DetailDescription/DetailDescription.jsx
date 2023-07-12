import * as React from "react";
import { Grid, Typography, Card, Rating } from "@mui/material";
import { useSelector } from "react-redux";
import { StyledStarBorderIcon, StyledStarIcon } from "../CardRoom/CardRoomStyled";
import styles from './Description.module.css'


const DetailDescription = () => {
  const { name, room_type, price, room_description, facilities, review_estrellas, review_description } = useSelector((state) => state.types.types)

  return (
    <Card
      sx={{
        backgroundColor: "#EFEEFF",
        height: "auto",
        marginLeft: '20px',
        marginBottom: '30px'
      }}
    >
      <Grid container spacing={2} style={{ padding: "20px", marginLeft: '20px' }}>
        <Grid item xs={12} sm={7}>
          <Typography item
            variant="h1"
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#868688",
            }}
          >
            {name}
          </Typography>

          <Typography item
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

        <Grid item
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
      <Grid container
        alignItems="flex-start"
        style={{

          borderTop: "1px solid",

          color: "#9A98FE",
        }}
      >
        <Grid container spacing={1} style={{ padding: "10px", margin: '20px', }}>
          <Grid item xs={12} sm={7}>
            <Grid item xs={12} sm={8} style={{ maxWidth: '80%' }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0400CB",
                  marginTop: '-20px',
                  marginBottom: '7px',

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
                  marginBottom: '7px',
                }}
              >
                Facilities
              </Typography>
              <Grid container spacing={0} style={{ marginTop: "0px" }}>
                {facilities.map((facility, index) => (
                  <Grid item xs={12} sm={4} key={index} style={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="p"
                      sx={{
                        flexGrow: 1,
                        fontSize: "16px",
                        color: "#C2C2C2",
                        marginTop: '0px'
                      }}
                    >
                      {facility}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

          </Grid>


          <Grid item xs={12} sm={5}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#0400CB",
                marginTop: "-20px",
                marginBottom: '10px',
              }}
            >
              Reviews
            </Typography>
            {review_estrellas.length > 0 ? (
              <div className={styles.scroll}>
                <Grid container spacing={4}>
                  <Grid item xs={6} sm={6}>
                    {review_estrellas.map((rating, index) => (
                      <Rating
                        key={index}
                        name={`rating-${index}`}
                        value={rating}
                        readOnly
                        emptyIcon={<StyledStarBorderIcon />}
                        icon={<StyledStarIcon />}
                        size="large"
                        sx={{ fontSize: 15 }}
                      />
                    ))}
                  </Grid>
                  <Grid item xs={6} md={6}>
                    {review_description.map((comentario, index) => (
                      <Typography key={index} variant="p">
                        {comentario}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </div>
            ) : (
              <Typography variant="p">
                No reviews for this room. Be the first to make one.
              </Typography>
            )}
          </Grid>
          {/* <Typography
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
            </Typography> */}
        
      </Grid>


    </Grid>
    </Card >
  );
};

export default DetailDescription;
