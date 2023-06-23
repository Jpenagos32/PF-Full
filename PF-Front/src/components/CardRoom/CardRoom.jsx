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
import { styled } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

const StyledCardContent = styled(CardContent)`
  /* Estilos CSS aquí */
  background-color: #ededed;
`;
const StyledDivider = styled(Divider)`
  /* Estilos CSS aquí */
  background-color: #9a98fe;
`;
const StyleTypography = styled(Typography)`
  /* Estilos CSS aquí */
  color: #0400cb;
`;
const StyleFacilitiesTypography = styled(Typography)`
  /* Estilos CSS aquí */
  color: rgba(0, 0, 0, 0.25);
  font-size: 15px;
`;
const StyledroomPriceTypography = styled(Typography)`
  /* Estilos CSS aquí */
  color: #9a98fe;
  font-size: 25px;
`;
const StyledUSD = styled("small")`
  /* Estilos CSS aquí */
  font-size: 8px;
`;

export default function CardRoom(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <Grid item xs>
            <Link to="/detail">
              <CardMedia
                component="img"
                height="194"
                image={props.image}
                alt="img not found"
              />
            </Link>
          </Grid>
          <StyledCardContent>
            <Grid item xs={12} sm container>
              <Grid item xs={8} container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h5" sx={{ mt: 1.5 }}>
                    {props.name}
                  </Typography>
                  <Rating
                    name="rating"
                    value={props.height}
                    readOnly
                    size="large"
                    sx={{ fontSize: 15 }}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <StyledroomPriceTypography sx={{ mt: 2 }}>
                  {`$${props.attack}`}
                  <StyledUSD>USD</StyledUSD>
                </StyledroomPriceTypography>
              </Grid>
            </Grid>
            <StyledDivider />
            <StyleTypography sx={{ mt: 1.5 }}>Facilities</StyleTypography>
            <StyleFacilitiesTypography>{props.speed}</StyleFacilitiesTypography>
            <StyleFacilitiesTypography>
              {props.defense}
            </StyleFacilitiesTypography>
            <StyleFacilitiesTypography>
              {props.weight}
            </StyleFacilitiesTypography>
          </StyledCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
