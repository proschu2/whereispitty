import React, { FC } from "react";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Picture from "./picture";
import { location } from "../data/location";
import Concert from "./concert";
import Casina from "./casina";
import { useParams } from "react-router-dom";
import data from "../data/locations.json";
import Info from "./info";

const getDay = (id?: string): location => {
  if (typeof id === "undefined") {
    return data.filter((l) => l.date === "*")[0];
  }
  const potentialLocations = data.filter(
    (l) => l.id === parseInt(id) || l.date === "*"
  );
  return potentialLocations[potentialLocations.length - 1];
};

const Day: FC<{ loc?: location }> = ({ loc }) => {
  const { id } = useParams();
  let dayLocation: location;
  if (loc) {
    dayLocation = loc;
  } else {
    dayLocation = getDay(id);
  }
  return (
    <Card
      className="whiterose"
      variant="outlined"
      sx={{ maxWidth: "100vh", mx: "auto", mt: 4, display: "flex" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Info loc={dayLocation} />
      </Box>
    </Card>
  );
};

export default Day;
