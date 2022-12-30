import React, { FC } from "react";

import { CircleFlag } from "react-circle-flags";
import { location } from "../data/location";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Concert: FC<location> = (props) => (
  <CardContent className="redrose">
    <Typography gutterBottom variant="h5" component="div">
      <span className="DeMo">C </span>
      <span className="DeltaMachine2">
        concert - {props.date} - {props.city}
      </span>
    </Typography>
    <span className="DeltaMachine">{props.city}</span>
    <span style={{ verticalAlign: "middle" }}>
      <CircleFlag countryCode={props.country.toLowerCase()} height="20" />
    </span>
    <br />
    <p className={props.class}>{props.name}</p>
    <p className="Violatio">
      Un bel testo per vedere com'e' con le accento ecc.
    </p>
    <p className="DeMo">C</p>
    <p className="Dotmatrx">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Dotmatrx
    </p>
    <p className="Revelator">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Revelator
    </p>
    <p className="DeltaMachine2">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' DeltaMachine2
    </p>
    <p className="Counterfeit">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Counterfeit
    </p>
    <p className="Papermonsters">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Papermonsters
    </p>
    <p className="Broken">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Broken
    </p>
    <p className="Cocogoose">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Cocogoose
    </p>
    <p className="DeltaMachine">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' DeltaMachine
    </p>
    <p className="Devotion">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Devotion
    </p>
    <p className="Violatio">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Violatio
    </p>
    <p className="Exciter">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Exciter
    </p>
    <p className="DeMo">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' DeMo
    </p>
    <p className="SufferWell">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' SufferWell
    </p>
    <p className="peoplearepeople">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' peoplearepeople
    </p>
    <p className="Liquidn">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' Liquidn
    </p>
  </CardContent>
);

export default Concert;
