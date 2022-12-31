import CardMedia from "@mui/material/CardMedia";
import React, { FC } from "react";

const Picture: FC<{ type?: string; className?: string; concert?: string }> = ({
  type,
  className,
  concert,
}) => {
  const homePics = ["coffee.webp", "couch.webp"];
  const concertPics = ["pit_tour1.webp", "pit_tour2.webp", "pit_tour3.webp"];
  const concertPic =
    typeof concert === "undefined"
      ? concertPics[Math.floor(Math.random() * concertPics.length)]
      : concert;
  const home = homePics[Math.floor(Math.random() * homePics.length)];
  return (
    <CardMedia
      className={className}
      component="img"
      alt="pitoncouch"
      height="100%"
      image={`/images/${
        type && type === "CONCERT" ? `concert/${concertPic}` : `home/${home}`
      }`}
    />
  );
};

export default Picture;
