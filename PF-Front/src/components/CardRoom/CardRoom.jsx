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
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Rating,
} from "@mui/material";
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

export default function CardRoom(props) {
  return (
    <Grid container spacing={2} sx={{ marginTop: "8px" }}>
      <Grid item xs={12}>
        <Link to={`/detail/${props.room_type}`} style={linkStyle}>
          <Card
            sx={{
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
                  image={props.image}
                  alt="img not found"
                />
              </Grid>

              <StyledCardContent>
                <Grid item xs={12} sm container>
                  <Grid item xs={12} container direction="column" spacing={2}>
                    <Grid item sx={{ width: 100 }}>
                      <StyleNameTypography variant="h5">
                        {props.name}
                      </StyleNameTypography>
                      <Rating
                        name="rating"
                        value={props.capacity}
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
                      {`$${props.price}`}
                      <StyledUSD>USD</StyledUSD>
                    </StyledRoomPriceTypography>
                  </Grid>
                </Grid>
                <StyledDivider />
                <StyleTypography sx={{ mt: 1.5 }}>Facilities</StyleTypography>
                <StyleFacilitiesTypography>
                  {props.number_of_beds}
                </StyleFacilitiesTypography>
                <StyleFacilitiesTypography>
                  {props.room_number}
                </StyleFacilitiesTypography>
                <StyleFacilitiesTypography>
                  {props.room_type}
                </StyleFacilitiesTypography>
              </StyledCardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}
