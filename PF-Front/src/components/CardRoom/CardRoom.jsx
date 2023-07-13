/**
 * JavascripFile: CardRoom.js
 * Objetivo: CardRoom es un componente de React que muestra una tarjeta de habitación.
 * Autor: Hernando Rey
 * Fecha de creación: 21 de junio 2023
 *
 *
 * Recibe las siguientes props:
 *   - image: la URL de la imagen de la habitación.
 *   - name: el nombre de la habitación.
 *   - rating: la altura (valor del Rating) de la habitación.
 *   - price: el valor del precio de la habitación.
 *   - room service: (facilities) de la habitación.
 *   - queen bed: (facilities) de la habitación.
 *   - hd tv: (facilities) de la habitación.
 */

import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "./CardRoomStyled";
import { Card, CardActionArea, CardMedia, Grid, Rating } from "@mui/material";
import {
  StyleNameTypography,
  StyledCardContent,
  StyledDivider,
  StyleTypography,
  StyleFacilitiesTypography,
  StyledRoomPriceTypography,
  StyledUSD,
  StyledStarIcon,
  StyledStarBorderIcon,
} from "./CardRoomStyled";

export default function CardRoom({
  facilities,
  room_number,
  image,
  name,
  price,
  review_estrellas,
}) {


  const calcularPromedio = () => {
    const suma = review_estrellas.reduce((total, valor) => total + valor, 0);
    const promedio = suma / review_estrellas.length;
    return promedio;
  };

  const promedioEstrellas = calcularPromedio();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "20px",
        marginBottom: {
          xs: "-15px", sm: "-30px", md: "-70px",
        },
      }}
    >
      <Grid item xs={12}>
        <Link to={`/detail/${room_number}`} style={linkStyle}>
          <Card
            sx={{
              backgroundColor: '#ededed',
              height: "500px",
              transition: "0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardActionArea>
              <Grid item xs>
                <CardMedia
                  component="img"
                  height="215"
                  image={image}
                  alt="img not found"
                />
              </Grid>

              <StyledCardContent>
                <Grid item xs={12} sm container>
                  <Grid item xs={12} container direction="column" spacing={2}>
                    <Grid item sx={{ width: 100, marginBottom: "-15px" }}>
                      <StyleNameTypography variant="h5">
                        {name}
                      </StyleNameTypography>
                      <Rating
                        name="rating"
                        value={promedioEstrellas}
                        readOnly
                        emptyIcon={<StyledStarBorderIcon />}
                        icon={<StyledStarIcon />}
                        size="large"
                        sx={{ fontSize: 15 }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledRoomPriceTypography sx={{ mt: 2 }}>
                      {`$${price}`}
                      <StyledUSD>USD</StyledUSD>
                    </StyledRoomPriceTypography>
                  </Grid>
                </Grid>
                <StyledDivider />
                <StyleTypography sx={{ mt: 1.5 }}>Facilities</StyleTypography>
                {facilities.map((facility, index) => (
                  <StyleFacilitiesTypography key={index}>
                    {facility}
                  </StyleFacilitiesTypography>
                ))}
              </StyledCardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}
