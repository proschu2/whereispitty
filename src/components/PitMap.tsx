import { Map, Overlay } from "pigeon-maps";
import React, { useState, useEffect } from "react";

import data from "../data/locations.json";
import Detail from "./Detail";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { location } from "../data/location";
/* 
import { maptiler } from "pigeon-maps/providers";

const maptilerProvider = maptiler(
  process.env.REACT_APP_MAPTILER_API_KEY ?? "",
  "basic-v2-light"
); */
const initialCenter: [number, number] = [48.71466750292578, 10.961941600930126];
const PitMap = () => {
  const { height, width } = useWindowDimensions();
  const initialZoom = width < 600 ? 5 : 6;
  const [center, setCenter] = useState<[number, number]>(initialCenter);
  const [zoom, setZoom] = useState<number>(initialZoom);
  const resetMap = () => {
    setCenter(initialCenter);
    setZoom(initialZoom);
  };
  const [open, setOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<location>();

  const [pinSize, setPinSize] = useState<string>("40");
  const updatePinSize = (zoom: number): void => {
    if (zoom > 6) {
      setPinSize("100");
    } else if (zoom === 6) {
      setPinSize("60");
    } else if (zoom === 5) {
      setPinSize("40");
    } else {
      setPinSize("25");
    }
  };
  const closeModal = () => {
    setOpen(false);
    resetMap();
    updatePinSize(zoom);
  };
  useEffect(() => {
    updatePinSize(zoom);
  }, [zoom]); // update based on zoom

  return (
    <>
      <Map
        //provider={maptilerProvider}
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
              <Overlay
                className="whiterose"
                key={loc.id}
                anchor={[loc.lat, loc.lon]}
                offset={[0, 0]}
              >
                <img
                  src="/dm_round.png"
                  alt="DM"
                  height={pinSize}
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
