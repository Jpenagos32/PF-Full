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
import { useSelector } from "react-redux";
import CardRoom from "../CardRoom/CardRoom";
import { Container, Grid } from "@mui/material";

export default function CardsContainer() {
  // const rooms = useSelector((state) => state.rooms);
  // console.log("Rooms data:", rooms);
  /*'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1403264758/content-items/000/610/961/IMG_7824-original.jpg?1403264758'

        "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1403264883/content-items/000/610/963/Detalle_4-original.jpg?1403264883",

        "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1403264914/content-items/000/610/964/Detalle_5-original.jpg?1403264914",

        "https://i.pinimg.com/originals/d2/26/9e/d2269e5391590ad832f880e2594e95d7.jpg",

        "https://i.pinimg.com/originals/44/fb/b2/44fbb2ef2537a77940d26002b2b36b0d.jpg",

        "https://i.pinimg.com/originals/87/18/b3/8718b3da6d7194a5293d5a5fb52973c8.jpg"*/
  // return (
  //   <Container>
  //     <Grid
  //       container
  //       rowSpacing={{ xs: 2, sm: 6, md: 8 }}
  //       columnSpacing={{ xs: 2, sm: 6, md: 8 }}
  //     >
  //       {rooms &&
  //         rooms.map((room) => (
  //           <Grid item xs={12} sm={6} md={4} key={room.id}>
  //             <CardRoom
  //               name={room.name}
  //               image={room.image}
  //               typos={room.room_type}
  //               price={room.price}
  //               weight={room.number_of_beds}
  //               capacity={room.capacity}
  //               desciption={room.room_description}
  //             />
  //           </Grid>
  //         ))}
  //     </Grid>
  //   </Container>
  // );
}
