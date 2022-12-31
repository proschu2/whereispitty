import React, { useState } from "react";
import data from "../data/locations.json";
import Day from "../components/day";
import { location } from "../data/location";
import Detail from "../components/detail";

const Today = () => {
  const today = new Date().toLocaleDateString("en-GB");
  const potentialLocations: location[] = data.filter(
    (loc) => loc.date === "*" || loc.date === today
  );
  const [open, setOpen] = useState<boolean>(true);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Detail
      closeModal={closeModal}
      open={open}
      props={potentialLocations[potentialLocations.length - 1]}
    />
  );
};

export default Today;
