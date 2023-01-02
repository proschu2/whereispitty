import { Map, Overlay } from "pigeon-maps";
import React, { useState, useEffect } from "react";
import data from "../data/locations.json";
import Detail from "./detail";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { location } from "../data/location";
import { Outlet } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { getDay, getPic } from "../utils/concert";
import Tour from "./tour";
/* 
import { maptiler } from "pigeon-maps/providers";

const maptilerProvider = maptiler(
  import.meta.env.VITE_MAPTILER_API_KEY ?? "",
  "basic-v2-light"
); */
const initialCenter: [number, number] = [48.71466750292578, 10.961941600930126];
const PitMap = () => {
  // use id (optional) parameters to select a specific day
  const { id } = useParams();

  // hook used to keep updated from the size of window
  const { height, width } = useWindowDimensions();

  // define initial zoom
  const initialZoom = useMediaQuery(useTheme().breakpoints.down("md")) ? 5 : 6;

  // define initial center and zoom (and functions to change them)
  const [center, setCenter] = useState<[number, number]>(initialCenter);
  const [zoom, setZoom] = useState<number>(initialZoom);

  // reset the map to initial center and zoom (after leaving modals)
  const resetMap = () => {
    setCenter(initialCenter);
    setZoom(initialZoom);
    updatePinSize(initialZoom);
  };

  // variables and functions to update status and content of the modal
  const [open, setOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<location>();

  // variable and function to update the size of the placeholders
  const [pinSize, setPinSize] = useState<string>("40");
  const updatePinSize = (zoom: number): void => {
    if (zoom >= 6) {
      setPinSize("60");
    } else if (zoom === 5) {
      setPinSize("40");
    } else {
      setPinSize("25");
    }
  };

  // define initial concert path and function to update it
  const [concert, setConcert] = useState<string>(getPic("CONCERT"));
  const updateConcertPhoto = () => {
    setConcert(getPic("CONCERT", concert));
  };

  // function to close the modal and reset the map
  const closeModal = () => {
    resetMap();
    setOpen(false);
  };

  // function to define the location used by modal
  const defineLocation = (loc: location) => {
    updateConcertPhoto();
    setCenter([loc.lat, loc.lon]);
    setZoom(8);
    setLocation(loc);
    setOpen(!open);
  };

  // effect that is used to check if an id is there, in case set the location
  useEffect(() => {
    if (typeof id !== "undefined") {
      const loc = getDay(id);
      defineLocation(loc);
    }
  }, [id]);

  return (
    <>
      {!open && <Tour />}
      <Map
        //provider={maptilerProvider}
        height={height}
        width={width}
        center={center}
        zoom={zoom}
        minZoom={5}
        onClick={resetMap}
        onBoundsChanged={({ center, zoom }) => {
          updatePinSize(zoom);
          setCenter(center);
          setZoom(zoom);
        }}
      >
        <Outlet />
        {data &&
          data
            .filter((l) => l.date !== "*")
            .map((loc) => {
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
                      defineLocation(loc);
                    }}
                  />
                </Overlay>
              );
            })}
      </Map>
      {location && (
        <Detail
          props={location}
          open={open}
          closeModal={closeModal}
          concert={concert}
        />
      )}
    </>
  );
};

export default PitMap;
