import * as React from "react";
import { Card, Grid, Rating, Typography } from "@mui/material";
import { StyledStarBorderIcon, StyledStarIcon } from "../CardRoom/CardRoomStyled";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomsData } from "../../redux/actions/roomAction";


export default function Reviews() {
const dispatch = useDispatch()
  const rooms = useSelector((state) => state.rooms.rooms);
  
  // const calcularPromedio = () => {
  //   const suma = rooms.review_estrellas.reduce((total, valor) => total + valor, 0);
  //   const promedio = suma / rooms.review_estrellas.length;
  //   return promedio;
  // };

  // const promedioEstrellas = calcularPromedio();
  // console.log(promedioEstrellas)
  React.useEffect(() => {
    dispatch(fetchRoomsData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Card
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          alignContent: "center",
          padding: "15px",
          marginBottom: "-22px",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={0} md={8}>
            <Rating
              name="rating"
              // value={promedioEstrellas}
              readOnly
              emptyIcon={<StyledStarBorderIcon />}
              icon={<StyledStarIcon />}
              size="large"
              sx={{ fontSize: 15 }}
            />
          </Grid>
          <Grid item xs={0} md={8}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#868688",
                marginTop: "30px",
                marginLeft: '45PX'
              }}
            >

            </Typography>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
};


