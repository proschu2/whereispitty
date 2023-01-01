import React from "react";

import { CircleFlag } from "react-circle-flags";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

const Casina = () => (
  <CardContent className="redrose">
    <Typography gutterBottom variant="h4" component="div">
      <span className="DeltaMachine2">concerto </span>
      <span className="DeMo">rs F tu</span>
    </Typography>
    <Typography style={{ verticalAlign: "middle" }} component="div">
      <Grid container columnSpacing={3} rowSpacing={1}>
        <Grid xs={12} sm="auto">
          <span className="Dotmatrx">TODAY </span>
        </Grid>
        <Grid xs={12} sm="auto">
          <span className="Counterfeit">NAME</span>
        </Grid>
        <Grid xs={12} sm="auto">
          <span className="DeltaMachine">CITY </span>
          <span style={{ verticalAlign: "middle" }}>
            <CircleFlag countryCode={"ch"} height="15" width="15" />
          </span>
        </Grid>
      </Grid>
    </Typography>
  </CardContent>
);

export default Casina;
