import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Calendar from "../../components/Calendar/Calendar";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';


const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Calendar />
        </Grid>
        <Grid item xs={6} md={9}>
          <CardsContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
