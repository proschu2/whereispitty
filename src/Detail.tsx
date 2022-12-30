import React, { FC } from "react";

import "react-morphing-modal/dist/ReactMorphingModal.css";
import Dialog from "@mui/material/Dialog";
import { location } from "./data/location";

const Detail: FC<{
  props: location;
  open: boolean;
  closeModal: () => void;
}> = ({ props, open, closeModal }) => (
  <Dialog open={open} onClose={closeModal} fullWidth>
    {props.id}
    <br />
    {props.date}
    <br />
    {props.city}
    <br />
    {props.country}
    <br />
    {props.name}
    <br />
    {props.lat}
    <br />
    {props.lon}
  </Dialog>
);

export default Detail;
