import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRoomsType } from "../../redux/actions/detailAction";
import { Box, Grid } from "@mui/material";
import DetailGallery from "../../components/DetailGallery/DetailGallery";
import LinearColor from "../../components/Loading/Linearcolor";
import SubTotal from "../../components/SubTotal/SubTotal";
import { setLoading } from "../../redux/slices/LodingSlice";
import DetailDescription from "../../components/DetailDescription/DetailDescription";

export default function Detail() {
  const { room_type } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const [googleMapLoaded, setGoogleMapLoaded] = useState(false);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchRoomsType(room_type));
  }, [dispatch, room_type]);

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
      <Grid container spacing={2}>
        <Grid item xs={0} md={9}>
          <DetailGallery />
        </Grid>
        <Grid item xs={12} md={3}>
          <SubTotal />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <DetailDescription />
        </Grid>
      </Grid>
    </Box>
  );
}
