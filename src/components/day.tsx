import React, { FC } from "react";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { location } from "../data/location";
import { useParams } from "react-router-dom";
import Info from "./info";
import { getDay } from "../utils/concert";

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
