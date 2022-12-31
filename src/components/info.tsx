import React, { FC } from "react";
import { location } from "../data/location";
import Picture from "./picture";
import Concert from "./concert";

const Info: FC<{ loc: location; concert?: string }> = ({ loc, concert }) => {
  return (
    <>
      <Picture
        className="whiterose"
        type={loc ? loc.type : "HOME"}
        concert={concert}
      />
      <Concert {...loc} />
    </>
  );
};

export default Info;
