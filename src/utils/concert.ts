import locations from "../data/locations.json";
import { location } from "../data/location";
import data from "../data/locations.json";

const homePics = ["coffee.webp", "couch.webp"];
const concertPics = [
  "pit_tour1.webp",
  "pit_tour2.webp",
  "pit_tour3.webp",
  "pit_tour4.webp",
];

export const getDay = (id?: string): location => {
  if (typeof id === "undefined") {
    return data.filter((l) => l.date === "*")[0];
  }
  const potentialLocations = data.filter(
    (l) => l.id === parseInt(id) || l.date === "*"
  );
  return potentialLocations[potentialLocations.length - 1];
};

const randomGen = (items: Array<string>): number => {
  return Math.floor(Math.random() * items.length);
};
type kind = "HOME" | "CONCERT";

export const getPic = (kind: kind = "CONCERT", past?: string): string => {
  const pics = kind === "CONCERT" ? concertPics : homePics;
  const potentialPics =
    typeof past !== "undefined" ? pics.filter((p) => p !== past) : pics;
  return potentialPics[randomGen(potentialPics)];
};
