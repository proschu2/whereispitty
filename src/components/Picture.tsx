import CardMedia from "@mui/material/CardMedia";
import React, { FC } from "react";

const Picture: FC<{ type?: string; className?: string }> = ({
  type,
  className,
}) => {
  const homePics = ["coffee.png", "couch.png"];
  return (
    <CardMedia
      className={className}
      component="img"
      alt="pitoncouch"
      height="100%"
      image={`/images/${
        type && type === "CONCERT"
          ? "concert/concert.jpg"
          : `home/${homePics[Math.floor(Math.random() * homePics.length)]}`
      }`}
    />
  );
};

export default Picture;
