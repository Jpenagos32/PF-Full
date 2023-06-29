import React from "react";
import { Grid, Card, TextField, Typography } from "@mui/material";
import { StyledCardContent, StyledDivider } from "./AvailabilityStyled";

export default function Availability() {
  return (
    <Grid
      container
      sx={{
        marginTop: "80px",
        padding: "20px",
      }}
    >
      <Grid>
        <Card>
          <Grid container>
            <StyledCardContent>
              <StyledDivider />
              <Grid item xs={12}>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6} md={2}>
                    <img src="ruta_de_la_imagen_1" alt="Imagen 1" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="body1">imagen 1</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField label="Campo 1" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField label="Campo 2" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6} md={2}>
                    <img src="ruta_de_la_imagen_2" alt="Imagen 2" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="body1">imagen 2</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField label="Campo 1" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField label="Campo 2" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6} md={2}>
                    <img src="ruta_de_la_imagen_3" alt="Imagen 3" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="body1">imagen 3</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField label="Campo 1" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField label="Campo 2" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <TextField />
                  </Grid>
                </Grid>
              </Grid>
            </StyledCardContent>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
