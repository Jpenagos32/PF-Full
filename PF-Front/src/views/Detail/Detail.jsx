import React from "react";

export default function Detail() {
  return <div>Detail</div>;
}

// import React, { useState, useEffect } from "react";
// import Grid from "@mui/material/Grid";
// import Gallery from "../../components/Gallery/Gallery";
// import Footer from "../../components/DetailFooter/Footer";
// import Calendar from "../../components/Calendar/Calendar";
// import Reviews from "../../components/Reviews/Reviews";
// import { NavLink, useParams } from "react-router-dom";

// const Detail = () => {
//     const params = useParams();
//     const [room, setRoom] = useState({});
//     const URL = "http://localhost:3001";

//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const apiData = await axios(
//                     `${URL}/rooms/type/${params.room_type}`
//                 );
//                 const data = apiData.data;

//                 if (data.name) {
//                     setRoom(data);
//                 }
//             } catch (error) {
//                 console.error(error);
//                 window.alert("Ocurrió un error al cargar los datos");
//             }
//         };

//         getData();

//         return () => {
//             setRoom({});
//         };
//     }, [params.id]);

//     return (
//         <main style={{ margin: "0 1rem 2rem 0" }}>
//             <Grid
//                 container
//                 spacing={1}
//                 sx={{
//                     fontFamily:
//                         'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
//                     overflow: "hidden",
//                     background: "#efeeff",
//                     height: "140vh",
//                     flexWrap: "wrap",
//                 }}>
//                 <Grid
//                     item
//                     xs={12}
//                     sm={6}
//                     md={8}
//                     lg={8}
//                     xl={8}>
//                     <Grid
//                         container
//                         spacing={1}
//                         sx={{
//                             margin: "1rem 1rem 0.1rem 1rem",
//                             height: "100vh",
//                             width: "100%",
//                             p: 2,
//                             backgroundColor: "#efeeff",
//                         }}>
//                         <Gallery image={room.image} />
//                     </Grid>
//                 </Grid>
//                 <Grid
//                     item
//                     xs={12}
//                     sm={6}
//                     md={4}
//                     lg={4}
//                     xl={4}>
//                     <Grid
//                         container
//                         spacing={1}
//                         sx={{
//                             margin: "1rem 0 0.1rem 0",
//                             borderRadius: "5px",
//                             height: "100vh",
//                             backgroundColor: "#efeeff",
//                             p: 2,
//                         }}>
//                         <Reviews />
//                     </Grid>
//                 </Grid>
//                 <Grid
//                     item
//                     xs={12}
//                     sm={6}
//                     md={8}
//                     lg={8}
//                     xl={8}>
//                     <Grid
//                         container
//                         spacing={1}
//                         sx={{
//                             margin: "0.1rem",
//                             borderRadius: "5px",
//                             height: "40vh",
//                             backgroundColor: "#efeeff",
//                             p: 2,
//                         }}>
//                         <Footer
//                             name={room.name}
//                             facilities={room.facilities}
//                             price={room.price}
//                             description={room.room_description}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Grid
//                     item
//                     xs={12}
//                     sm={6}
//                     md={4}
//                     lg={4}
//                     xl={4}>
//                     <Grid
//                         container
//                         spacing={1}
//                         sx={{
//                             margin: "0.1rem",
//                             borderRadius: "5px",
//                             height: "40vh",
//                             backgroundColor: "#efeeff",
//                             p: 2,
//                         }}>
//                         <Reviews />
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </main>
//     );
// };

// export default Detail;
