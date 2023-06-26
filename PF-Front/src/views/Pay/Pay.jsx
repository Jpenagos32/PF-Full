import React from "react";
import { NavLink } from "react-router-dom";
import FormComponent from "../../components/Form/Form";
import PayResume from "../../components/PayResume/PayResume";
import { Grid } from "@mui/material";

export default function PayView() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 6, sm: 8, md: 12 }}
        justifyContent="center"
      >
        <Grid item>
          <FormComponent />
        </Grid>
        <Grid item>
          <PayResume />
        </Grid>
      </Grid>
    </Grid>
  );
}
