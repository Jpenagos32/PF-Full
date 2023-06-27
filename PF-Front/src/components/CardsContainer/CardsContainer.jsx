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

export default function CardsContainer() {
 
  return (
    <Container>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 6, md: 8 }}
        columnSpacing={{ xs: 2, sm: 6, md: 8 }}
      >
        {cardsRooms &&
          cardsRooms.map((room) => (
            <Grid item xs={12} sm={6} md={4} key={room.id}>
              <CardRoom
                name={room.name}
                image={room.image}
                speed={room.speed}
                height={room.height}
                weight={room.weight}
                defense={room.defense}
                attack={room.attack}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}



// const cardsRooms = [
//   {
//     id: 1,
//     name: "Habitación Estándar",
//     hp: 45,
//     attack: 49,
//     defense: "Queen Bed",
//     speed: "HD Tv",
//     height: 0.7,
//     weight: "Room Service",
//     types: ["grass", "poison"],
//     image:
//       "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1403264758/content-items/000/610/961/IMG_7824-original.jpg?1403264758",
//     created: "false",
//   },
//   {
//     id: 2,
//     name: "Habitación Familiar",
//     hp: 60,
//     attack: 62,
//     defense: "Queen Bed",
//     speed: "HD Tv",
//     height: 1,
//     weight: "Room Service",
//     types: ["grass", "poison"],
//     image:
//       "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1403264883/content-items/000/610/963/Detalle_4-original.jpg?1403264883",
//     created: "false",
//   },
//   {
//     id: 3,
//     name: "Suite Presidencial",
//     hp: 80,
//     attack: 82,
//     defense: "Queen Bed",
//     speed: "HD Tv",
//     height: 2,
//     weight: "Room Service",
//     types: ["grass", "poison"],
//     image:
//       "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1403264914/content-items/000/610/964/Detalle_5-original.jpg?1403264914",
//     created: "false",
//   },
//   {
//     id: 4,
//     name: "Suite Ejecutiva",
//     hp: 39,
//     attack: 52,
//     defense: "Queen Bed",
//     speed: "HD Tv",
//     height: 0.6,
//     weight: "Room Service",
//     types: ["fire"],
//     image:
//       "https://i.pinimg.com/originals/d2/26/9e/d2269e5391590ad832f880e2594e95d7.jpg",
//     created: "false",
//   },
//   {
//     id: 5,
//     name: "Habitación Deluxe",
//     hp: 58,
//     attack: 64,
//     defense: "Queen Bed",
//     speed: "HD Tv",
//     height: 1.1,
//     weight: "Room Service",
//     types: ["fire"],
//     image:
//       "https://i.pinimg.com/originals/44/fb/b2/44fbb2ef2537a77940d26002b2b36b0d.jpg",
//     created: "false",
//   },
//   {
//     id: 6,
//     name: "Habitación Superior ",
//     hp: 78,
//     attack: 84,
//     defense: "Queen Bed",
//     speed: "HD Tv",
//     height: 1.7,
//     weight: "Room Service",
//     types: ["fire", "flying"],
//     image:
//       "https://i.pinimg.com/originals/87/18/b3/8718b3da6d7194a5293d5a5fb52973c8.jpg",
//     created: "false",
//   },
// ];