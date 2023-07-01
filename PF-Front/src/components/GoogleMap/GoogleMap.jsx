import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Grid } from "@mui/material";

export default function GoogleMaps() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 6.113383505624506,
    lng: 80.1226430848166,
  };
  const markerPosition = {
    lat: 6.113383505624506,
    lng: 80.1226430848166,
  };

  return (
    <Grid
      container
      sx={{
        margin: "10px",
      }}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </Grid>
  );
}
