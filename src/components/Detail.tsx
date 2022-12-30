import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";
import { location } from "../data/location";
import Concert from "./Concert";

const Detail: FC<{
  props: location;
  open: boolean;
  closeModal: () => void;
}> = ({ props, open, closeModal }) => (
  <Dialog open={open} onClose={closeModal} fullWidth>
    <Concert {...props} />
  </Dialog>
);

export default Detail;
