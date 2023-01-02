import CardMedia from "@mui/material/CardMedia";
import React, { FC, useEffect, useState } from "react";
import { getPic } from "../utils/concert";
import "../styles/picture.css";

const Picture: FC<{ type?: string; className?: string; concert?: string }> = ({
  type,
  className,
  concert,
}) => {
  const [c, setC] = useState(concert);
  useEffect(() => {
    if (typeof concert === "undefined") {
      setC(getPic("CONCERT", concert));
    }
  }, [concert]);
  const pic = type === "HOME" ? `home/${getPic("HOME")}` : `concert/${c}`;
  return (
    <>
      {pic && (
        <CardMedia
          className={className}
          component="img"
          alt={type}
          image={`/images/${pic}`}
          loading="lazy"
        />
      )}
    </>
  );
};

export default Picture;
