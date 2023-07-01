import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { Grid } from "@mui/material";

export default function LinearColor() {
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        margin: "0 auto",
      }}
    >
      <Grid item xs={4} sm={6} md={8}>
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress
            sx={{
              "& .MuiLinearProgress-barColorPrimary": {
                backgroundColor: "#9A98FE",
              },
            }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
