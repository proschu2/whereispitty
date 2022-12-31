import React from "react";
import data from "../data/locations.json";
import Day from "../components/Day";
import { location } from "../data/location";
const Today = () => {
  const today = new Date().toLocaleDateString("en-GB");
  const potentialLocations: location[] = data.filter(
    (loc) => loc.date === "*" || loc.date === today
  );
  return <Day loc={potentialLocations[potentialLocations.length - 1]} />;
};

export default Today;
