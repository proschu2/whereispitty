import { location } from '../data/location';
import data from '../data/locations.json';

const homePics = ['coffee.webp', 'couch.webp'];
const concertPics = [
  'pit_tour1.webp',
  'pit_tour2.webp',
  'pit_tour3.webp',
  'pit_tour4.webp',
  'pit_tour5.webp',
  'pit_tour6.webp',
  'pit_tour7.webp',
  'pit_tour8.webp',
  'pit_tour9.webp',
  'pit_tour10.webp',
];

export const getDay = (id?: string): location => {
  // id is either a date or the locarion id
  if (typeof id === 'undefined') {
    return data.filter((l) => l.date === '*')[0];
  }
  const q = id === 'today' ? new Date().toLocaleDateString('en-GB') : id;
  const potentialLocations = data.filter(
    (l) => (q.includes('/') ? l.date === q : l.id === parseInt(q)) || l.date === '*',
  );
  return potentialLocations[potentialLocations.length - 1];
};

const randomGen = (items: Array<string>): number => {
  return Math.floor(Math.random() * (items.length + 1));
};

type kind = 'HOME' | 'CONCERT';

export const getPic = (kind: kind = 'CONCERT', past?: string): string => {
  const pics = kind === 'CONCERT' ? concertPics : homePics;
  const potentialPics = typeof past !== 'undefined' ? pics.filter((p) => p !== past) : pics;
  return potentialPics[randomGen(potentialPics)];
};
