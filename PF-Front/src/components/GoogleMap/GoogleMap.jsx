import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Grid } from "@mui/material";

export default function GoogleMaps() {
  return (
    <Grid>
      <Grid item xs={20} md={8} lg={6} xl={4}>
        <GoogleMap
          mapContainerStyle={{
            width: "240%",
            height: "300px",
            borderRadius: "5%",
          }}
          center={{
            lat: -40.1397,
            lng: -71.4237,
          }}
          zoom={7}
        >
          <Marker
            position={{
              lat: -40.1397,
              lng: -71.4237,
            }}
          />
        </GoogleMap>
      </Grid>
    </Grid>
  );
}
