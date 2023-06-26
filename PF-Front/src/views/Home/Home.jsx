import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Calendar from "../../components/Calendar/Calendar";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Filters from "../../components/Filters/Filters";


const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Calendar />
          <Filters />
        </Grid>
        <Grid item xs={0} md={9}>
          <CardsContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
