import React, { useState } from "react";
import Detail from "../components/detail";
import { getDay } from "../utils/concert";

const Today = () => {
  const today = new Date().toLocaleDateString("en-GB");
  const loc = getDay(today);
  const [open, setOpen] = useState<boolean>(true);
  const closeModal = () => {
    setOpen(false);
  };
  return <Detail closeModal={closeModal} open={open} props={loc} />;
};

export default Today;
