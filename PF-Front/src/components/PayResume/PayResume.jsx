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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Grid } from "@mui/material";
import {
  StyleNameTypography,
  StyledCardContent,
  StyledDivider,
  StyleTypography,
  StyledRoomPriceTypography,
  StyleTotalTypography,
  StyledPriceTypography,
  StyledFacilitiesTypography,
} from "./PayResumeStyled";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


export default function PayResume() {

  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("<PUBLIC_KEY>");

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        name: '101010',
        price: 100,

      });

      const { id } = response.data
      return id

    } catch (error) {
      console.log(error)
    }

  };

  const handleOnClikPay = async () => {
    const id = await createPreference()
    if (id) {
      setPreferenceId(id)
    }
  }

    // const handlePayment = () => {
    //     const isConfirmed = window.confirm('¿Estás seguro de realizar el pago?');
    //     if (isConfirmed) {
    //       // Lógica para realizar el pago
    //     } else {
    //       // Lógica para cancelar el pago
    //     }
    //   };

  return (
    <Grid
      container
      sx={{
        marginTop: "20px",
        padding: "20px",
        maxWidth: "md",
      }}
    >
      <Grid>
        <Card>
          <Grid container>
            <Grid item xs={12}>
              <Link to="/detail">
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1403264758/content-items/000/610/961/IMG_7824-original.jpg?1403264758"
                  }
                  alt="img not found"
                />
              </Link>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <StyledCardContent>
                  <Grid item container direction="column" spacing={2}>
                    <Grid item sx={{ width: 100 }}>
                      <StyleNameTypography variant="h5" sx={{ mb: 3 }}>
                        {"Suite Ejecutiva"}
                      </StyleNameTypography>
                    </Grid>
                  </Grid>

                  <StyledDivider />

                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={6}
                      sx={{ mt: 2, mb: 2 }}
                    >
                      <StyleTypography sx={{ mt: 1 }}>
                        Check In:
                      </StyleTypography>
                      <StyleTypography sx={{ mt: 1 }}>
                        Check Out:
                      </StyleTypography>
                      <StyleTypography sx={{ mt: 1 }}>
                        Room Type:
                      </StyleTypography>
                      <StyleTypography sx={{ mt: 1 }}>Rooms:</StyleTypography>
                      <StyleTypography sx={{ mt: 1 }}>Gues:</StyleTypography>
                      <StyleTypography sx={{ mt: 1 }}>Extras:</StyleTypography>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={6}
                      sx={{ mt: 2, mb: 2 }}
                    >
                      <StyledFacilitiesTypography sx={{ mt: 1 }}>
                        {"WED. June 13 2023"}
                      </StyledFacilitiesTypography>
                      <StyledFacilitiesTypography sx={{ mt: 1 }}>
                        {"TUR. June 13 2023"}
                      </StyledFacilitiesTypography>
                      <StyledFacilitiesTypography sx={{ mt: 1 }}>
                        {"Double Queen"}
                      </StyledFacilitiesTypography>
                      <StyledFacilitiesTypography sx={{ mt: 1 }}>
                        {"2"}
                      </StyledFacilitiesTypography>
                      <StyledFacilitiesTypography sx={{ mt: 1 }}>
                        {"2"}
                      </StyledFacilitiesTypography>
                      <StyledFacilitiesTypography sx={{ mt: 1 }}>
                        {"Smoking, Lunch"}
                      </StyledFacilitiesTypography>
                    </Grid>
                  </Grid>

                  <StyledDivider />

                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={6}
                      sx={{ mt: 2, mb: 2 }}
                    >
                      <StyleTotalTypography sx={{ mt: 1 }}>
                        Room price:
                      </StyleTotalTypography>
                      <StyledPriceTypography sx={{ mb: 2 }}>
                        {"USD,$500"}
                      </StyledPriceTypography>
                      <StyleTotalTypography sx={{ mt: 1 }}>
                        Hotel sale tax:
                      </StyleTotalTypography>
                      <StyledPriceTypography sx={{ mb: 2 }}>
                        {"USD,$500"}
                      </StyledPriceTypography>
                      <StyleTotalTypography sx={{ mt: 1 }}>
                        Extras fee:
                      </StyleTotalTypography>
                      <StyledPriceTypography>
                        {"USD,$500"}
                      </StyledPriceTypography>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={6}
                      sx={{ mt: 6 }}
                    >
                      <StyleTotalTypography>SubTotal</StyleTotalTypography>
                      <StyledRoomPriceTypography sx={{ mt: 2 }}>
                        USD,
                      </StyledRoomPriceTypography>
                      <StyledRoomPriceTypography>
                        {`$${500}`}
                      </StyledRoomPriceTypography>
                    </Grid>
                  </Grid>
                </StyledCardContent>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

//  <Grid
//       container
//       sx={{
//         marginTop: "20px",
//         padding: "20px",
//       }}
//     >
//       <Grid item>
//         <Card>
//           <Grid item>
//             <Link to="/detail">
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={
//                   "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1403264758/content-items/000/610/961/IMG_7824-original.jpg?1403264758"
//                 }
//                 alt="img not found"
//               />
//             </Link>
//           </Grid>
//           <StyledCardContent>
//             <Grid item container direction="column" spacing={2}>
//               <Grid item sx={{ width: 100 }}>
//                 <StyleNameTypography variant="h5" sx={{ mb: 3 }}>
//                   {"Suite Ejecutiva"}
//                 </StyleNameTypography>
//               </Grid>
//             </Grid>

//             <StyledDivider />

//             <Grid container spacing={6}>
//               <Grid item xs={6} sx={{ mt: 2, mb: 2 }}>
//                 <StyleTypography sx={{ mt: 1 }}>Check In:</StyleTypography>
//                 <StyleTypography sx={{ mt: 1 }}>Check Out:</StyleTypography>
//                 <StyleTypography sx={{ mt: 1 }}>Room Type:</StyleTypography>
//                 <StyleTypography sx={{ mt: 1 }}>Rooms:</StyleTypography>
//                 <StyleTypography sx={{ mt: 1 }}>Gues:</StyleTypography>
//                 <StyleTypography sx={{ mt: 1 }}>Extras:</StyleTypography>
//               </Grid>

//               <Grid item xs={6} sx={{ mt: 2, mb: 2 }}>
//                 <StyledFacilitiesTypography sx={{ mt: 1 }}>
//                   {"WED. June 13 2023"}
//                 </StyledFacilitiesTypography>
//                 <StyledFacilitiesTypography sx={{ mt: 1 }}>
//                   {"TUR. June 13 2023"}
//                 </StyledFacilitiesTypography>
//                 <StyledFacilitiesTypography sx={{ mt: 1 }}>
//                   {"Double Queen"}
//                 </StyledFacilitiesTypography>
//                 <StyledFacilitiesTypography sx={{ mt: 1 }}>
//                   {"2"}
//                 </StyledFacilitiesTypography>
//                 <StyledFacilitiesTypography sx={{ mt: 1 }}>
//                   {"2"}
//                 </StyledFacilitiesTypography>
//                 <StyledFacilitiesTypography sx={{ mt: 1 }}>
//                   {"Smoking, Lunch"}
//                 </StyledFacilitiesTypography>
//               </Grid>
//             </Grid>

//             <StyledDivider />

//             <Grid container spacing={12}>
//               <Grid item xs={6} sx={{ mt: 2, mb: 2 }}>
//                 <StyleTotalTypography sx={{ mt: 1 }}>
//                   Room price:
//                 </StyleTotalTypography>
//                 <StyledPriceTypography sx={{ mb: 2 }}>
//                   {"USD,$500"}
//                 </StyledPriceTypography>
//                 <StyleTotalTypography sx={{ mt: 1 }}>
//                   Hotel sale tax:
//                 </StyleTotalTypography>
//                 <StyledPriceTypography sx={{ mb: 2 }}>
//                   {"USD,$500"}
//                 </StyledPriceTypography>
//                 <StyleTotalTypography sx={{ mt: 1 }}>
//                   Extras fee:
//                 </StyleTotalTypography>
//                 <StyledPriceTypography>{"USD,$500"}</StyledPriceTypography>
//               </Grid>

//               <Grid item xs={6} sx={{ mt: 6 }}>
//                 <StyleTotalTypography>SubTotal</StyleTotalTypography>
//                 <StyledRoomPriceTypography sx={{ mt: 2 }}>
//                   USD,
//                 </StyledRoomPriceTypography>
//                 <StyledRoomPriceTypography>
//                   {`$${500}`}
//                 </StyledRoomPriceTypography>
//               </Grid>
//             </Grid>
//           </StyledCardContent>
//         </Card>
//       </Grid>
//     </Grid>
