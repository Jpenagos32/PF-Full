/**
 * JavascripFile: CardContainer.js
 * Objetivo:  El componente CardsContainer es responsable de renderizar una
 * colección de tarjetas de habitaciones. Cada tarjeta representa una habitación con diferentes atributos como nombre, imagen, rating, price, room service, queen bed y hd tv.
 * Autor: Hernando Rey
 * Fecha de creación: 21 de junio 2023
 *
 *
 *   - CardsContainer: La función principal del componente que renderiza el
 * contenedor de tarjetas de habitaciones.
 *   - map(): Una función de Array utilizada para iterar sobre la lista de habitaciones
 *(cardsRooms) y generar las tarjetas correspondientes.
 *   - CardsContainer: No tiene parámetros de entrada ni salida.
 */

import React from "react";
import CardRoom from "../CardRoom/CardRoom";
import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  const cardsRooms = useSelector((state) => state.rooms.rooms.filteredRooms);

  return (
    <Container>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 6, md: 8 }}
        columnSpacing={{ xs: 2, sm: 6, md: 8 }}
      >
        {cardsRooms &&
          cardsRooms.map((room) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={room._id}>
                <CardRoom
                  _id={room._id}
                  name={room.name}
                  // image={room.image[0].bed}
                  price={room.price}
                  number_of_beds={room.number_of_beds}
                  capacity={room.capacity}
                  room_number={room.room_number}
                  room_type={room.room_type}
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
