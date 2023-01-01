import React, { useState } from "react";

import Detail from "../components/detail";
import { useParams } from "react-router-dom";
import { getDay } from "../utils/concert";

const Day = () => {
  const { id } = useParams();

  const today = new Date().toLocaleDateString("en-GB");
  const loc = getDay(id ?? today);

  return <></>;
  //<Detail closeModal={closeModal} open={open} props={loc} />;
};

export default Day;
