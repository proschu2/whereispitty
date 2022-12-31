
const homePics = ["coffee.webp", "couch.webp"];
const concertPics = ["pit_tour1.webp", "pit_tour2.webp", "pit_tour3.webp"];

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
