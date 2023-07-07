/**
 * JavascripFile: PayResume.js
 * Objetivo: Payresume es un componente de React que muestra un resumen de pago para una reserva de hotel.
 * Autor: Hernando Rey
 * Fecha de creación: 24 de junio 2023
 *
 *
 *   - Renderizar una cuadrícula contenedora con margen superior y relleno.
 *   - Renderizar un elemento de tarjeta.
 *   - Renderizar un elemento de enlace a la página de detalles del hotel.
 *   - Renderizar una imagen de la tarjeta.
 *   - Renderizar un contenido estilizado de la tarjeta.
 *   - Renderizar una cuadrícula contenedora de elementos en dirección de columna con espaciado.
 *   - Renderizar un elemento de tipografía estilizado para el nombre de la habitacion.
 *   - Renderizar un elemento de tipografía estilizado para la tarifa de extrasa.
 *   - Renderizar un elemento de tipografía estilizado para el subtotal.
 *   - Renderizar un elemento de tipografía estilizado para el precio total de la habitación.
 */

import React, { useContext } from "react";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StyledDivider } from "./PayResumeStyled";
import { DateContext } from "../../Context/DateContex";

export default function PayResume() {
  const { startDate, endDate } = useContext(DateContext);
  const { child, adult, numberooms, nights, total } = useSelector(
    (state) => state.booking
  );
  const { name, price, image, room_type } = useSelector((state) => state.types.types);
  const initial = startDate ? startDate.format("YYYY-MM-DD") : "";
  const finish = endDate ? endDate.format("YYYY-MM-DD") : "";

  return (
  
    <Card
      elevation={0}
      sx={{
        backgroundColor: "#DFDFFF",
        height: "auto",
        marginTop: "20px",
        marginBottom: "55px",
        width: "450px",
      }}
    >
      <CardMedia component="img" height="200" image={image.bed} alt={name} />

        <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "#868688",
              marginTop: "17px",
              marginBottom: "10px",
              marginLeft: '30px'
            }}
          >
            {name}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} >
          <Typography
            variant="h1"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#868688",
              marginTop: "17px",
              marginLeft: "40px",
            }}
          >
            Total
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "#0400CB",
              marginLeft: "40px",
              marginBottom: '15px'
            }}
          >
            USD,${total}
          </Typography>
        </Grid>
      </Grid>
      <StyledDivider />


      <Grid container sx={{ margin: "15px"}}>
        <Grid item xs={12} sm={3}  >
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#9a98fe",
              fontWeight: 'bold',
              marginTop: "20px", 
              marginLeft: "20px",
            }}
          >
            Room Price:
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#9a98fe",
              fontWeight: 'bold',
              marginTop: "20px",        
              marginLeft: "20px",
            }}
          >
            Check In:
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#9a98fe",
              fontWeight: 'bold',
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            Check Out:
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#9a98fe",
              fontWeight: 'bold',
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            Room Type:
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} >
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#868688",
              marginTop: "20px",
            }}
          > ${price}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#868688",
              marginTop: "20px",                       
            }}
          >
            {initial}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#868688",
              marginTop: "20px", 
                 
            }}
          >
            {finish}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#868688",
              marginTop: "20px", 
                
            }}
          >
            {room_type}
          </Typography>
        </Grid>


        <Grid item xs={6} sm={4}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#9a98fe",
              fontWeight: 'bold',
              marginTop: "20px",           
            }}
          >
            Total of Rooms:
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#9a98fe",
              fontWeight: 'bold',
              marginTop: "20px",
            }}
          >
            Total of Nights:
          </Typography>       
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#9a98fe",
              fontWeight: 'bold',
              marginTop: "20px",
            }}
          >
            Total of Adults:
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#9a98fe",
              fontWeight: 'bold',
              marginTop: "20px",
            }}
          >
            Total of childs:
          </Typography>

        </Grid>


        <Grid item xs={6} sm={2}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#868688",
              marginTop: "20px",
            }}
          >
            {numberooms}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#868688",
              marginTop: "20px",
            }}
          >
            {nights}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#868688",
              marginTop: "20px",
            }}
          >
            {adult}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: "15px",
              color: "#868688",
              marginTop: "20px",
              marginBottom: '30px'
            }}
          >
            {child}
          </Typography>


        </Grid>
      </Grid>
    </Card>
    
  );
}
