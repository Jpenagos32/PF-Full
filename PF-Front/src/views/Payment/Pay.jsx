import React from "react";
import FormComponent from "../../components/Form/Form";
import PayResume from "../../components/PayResume/PayResume";
import { Grid } from "@mui/material";

export default function PayView() {
  return (

    <Grid container
      rowSpacing={2} 
      sx={{
        backgroundColor: "#FAFAFF"
      }}
    >
      <Grid item sm={12} md={7}>
        <FormComponent />
      </Grid>
      <Grid item sm={12} md={5}>
        <PayResume />
      </Grid>
    </Grid>

  );
}
