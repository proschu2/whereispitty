import React from "react";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  elevation: 0,
  color: theme.palette.text.secondary,
}));

const Day = () => {
  return (
    // <Container maxWidth="lg">
    // <Box sx={{ my: "auto", mx: "auto", p: 4 }}>
    <Card
      variant="outlined"
      sx={{ maxWidth: "100vh", mx: "auto", mt: 4, display: "flex" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/*         <Grid container spacing={0}>
          <Grid sm={8} xs={12}> */}
        <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          image="/photos/couch.png"
        />
        <CardContent>AAA</CardContent>
        {/*         <Item elevation={0}>AAA</Item>
          </Grid>

          <Grid sm={4} xs={12}>
            <Item elevation={0}>AAA</Item>
          </Grid>
        </Grid> */}
      </Box>
    </Card>
    // </Box>
    // </Container>
  );
};

export default Day;
