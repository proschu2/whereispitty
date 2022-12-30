import { Map, Overlay } from "pigeon-maps";
import React, { useState } from "react";

import data from "./data/locations.json";
import Detail from "./Detail";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { CircleFlag } from "react-circle-flags";
import { location } from "./data/location";

// import { maptiler } from "pigeon-maps/providers";

// const maptilerProvider = maptiler(process.env.REACT_APP_MAPTILER_API_KEY, "basic-v2-light");
const initialCenter: [number, number] = [48.71466750292578, 10.961941600930126];
const PitMap = () => {
  const { height, width } = useWindowDimensions();
  const [center, setCenter] = useState<[number, number]>(initialCenter);
  const [zoom, setZoom] = useState<number>(6);
  const resetMap = () => {
    setCenter(initialCenter);
    setZoom(6);
  };
  const [open, setOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<location>();
  const closeModal = () => {
    setOpen(false);
    resetMap();
  };

  return (
    <>
      <Map
        // provider={maptilerProvider}
        height={height}
        width={width}
        center={center}
        zoom={zoom}
        minZoom={5}
        onClick={resetMap}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center);
          setZoom(zoom);
        }}
      >
        {data &&
          data.map((loc) => {
            return (
              <Overlay key={loc.id} anchor={[loc.lat, loc.lon]} offset={[0, 0]}>
                <CircleFlag
                  countryCode={loc.country.toLowerCase()}
                  height="20"
                  onClick={() => {
                    setCenter([loc.lat, loc.lon]);
                    setZoom(8);
                    setOpen(!open);
                    setLocation(loc);
                  }}
                />
              </Overlay>
            );
          })}
      </Map>
      {location && (
        <Detail props={location} open={open} closeModal={closeModal} />
      )}
    </>
  );
};

export default PitMap;
