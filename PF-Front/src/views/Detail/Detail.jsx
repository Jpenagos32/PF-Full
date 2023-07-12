import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchRoomsType } from "../../redux/actions/detailAction";
import { Box, Grid } from "@mui/material";
import DetailGallery from "../../components/DetailGallery/DetailGallery";
import LinearColor from "../../components/Loading/Linearcolor";
import SubTotal from "../../components/SubTotal/SubTotal";
import { setLoading } from "../../redux/slices/LodingSlice";
import DetailDescription from "../../components/DetailDescription/DetailDescription";
import Reviews from "../../components/Reviews/Reviews";

export default function Detail() {
  const { room_number } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const [googleMapLoaded, setGoogleMapLoaded] = useState(false);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchRoomsType(room_number));
  }, [dispatch, room_number]);

  useEffect(() => {
    if (!loading) {
      setGoogleMapLoaded(true);
    }
  }, [loading]);

  if (loading || !googleMapLoaded) {
    return <LinearColor />;
  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#FAFAFF" }}>
      <Grid container spacing={4}>
        <Grid item xs={0} md={8}>
          <DetailGallery />
          <DetailDescription />
        </Grid>
        <Grid item xs={12} md={4}>
          <SubTotal />
        </Grid>
      </Grid>
    </Box>
  );
}
