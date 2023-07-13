import React, { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Calendar from "../../components/Calendar/Calendar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Filters from "../../components/Filters/Filters";
import { useDispatch } from "react-redux";
import { fetchRoomsData } from "../../redux/actions/roomAction";
import { setLoading } from "../../redux/slices/LodingSlice";
import SearchBar from "../../components/BarOrder/SearchBar";



const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchRoomsData());
  }, [dispatch]);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#FAFAFF" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Calendar />
          <Filters />
        </Grid>
        <Grid item xs={0} md={9}>
          <SearchBar />
          <CardsContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
