/**
 * JavascripFile: CardContainer.js
 * Objetivo: El componente CardsContainer es responsable de renderizar una
 * colección de tarjetas de habitaciones. Cada tarjeta representa una habitación con diferentes atributos como nombre, imagen, rating, price, room service, queen bed y hd tv.
 * Autor: Hernando Rey
 * Fecha de creación: 21 de junio 2023
 *
 *   - CardsContainer: La función principal del componente que renderiza el
 * contenedor de tarjetas de habitaciones.
 *   - map(): Una función de Array utilizada para iterar sobre la lista de habitaciones
 * (cardsRooms) y generar las tarjetas correspondientes.
 *   - CardsContainer: No tiene parámetros de entrada ni salida.
 */
import React, { useEffect, useState } from "react";
import CardRoom from "../CardRoom/CardRoom";
import CardRoomSkeleton from "../CardRommSkeleton/CardRommSkeleton";
import { Container, Grid, Pagination } from "@mui/material";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  const loading = useSelector((state) => state.loading.loading);
  const cardsRooms = useSelector((state) => state.rooms.rooms.filteredRooms);
  const filteredrooms = useSelector((state) => state.rooms.rooms.filtered);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  let roomsToShow = [];

  if (typeof filteredrooms !== "undefined") {
    roomsToShow = filteredrooms;
  } else {
    roomsToShow = cardsRooms;
  }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = roomsToShow
  ? roomsToShow.slice(indexOfFirstCard, indexOfLastCard)
  : [];
  
  const totalPages = roomsToShow
    ? Math.ceil(roomsToShow.length / cardsPerPage)
    : 0;


  useEffect(() => {
    setCurrentPage(1);
  }, [roomsToShow]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Grid>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Grid>
      <Container>
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 6, md: 8 }}
          columnSpacing={{ xs: 2, sm: 6, md: 8 }}
        >
          {loading
            ? Array.from(new Array(9)).map((_, index) => (
                <CardRoomSkeleton key={index} />
              ))
            : currentCards.map((room) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={room._id}>
                    <CardRoom
                      _id={room._id}
                      name={room.name}
                      image={room.image.bed}
                      price={room.price}
                      facilities={room.facilities}
                      room_type={room.room_type}
                      room_number={room.room_number}
                      review_estrellas={room.review_estrellas}
                    
                    />
                  </Grid>
                );
              })}
        </Grid>
      </Container>
    </div>
  );
}
