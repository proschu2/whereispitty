import CardMedia from "@mui/material/CardMedia";
import React, { FC } from "react";
import { getPic } from "../utils/concert";

const Picture: FC<{ type?: string; className?: string; concert?: string }> = ({
  type,
  className,
  concert,
}) => {
  const pic =
    type === "HOME"
      ? `home/${getPic("HOME")}`
      : `concert/${
          typeof concert === "undefined" ? getPic("CONCERT") : concert
        }`;
  return (
    <CardMedia
      className={className}
      component="img"
      alt={type}
      width="100%"
      image={`/images/${pic}`}
    />
  );
};

export default Picture;
