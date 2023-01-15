import { Map, Overlay } from 'pigeon-maps';
import React, { useState, useEffect } from 'react';
import data from '../data/locations.json';
import Detail from './detail';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { location } from '../data/location';
import { Outlet, useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getDay } from '../utils/concert';
import Tour from './tour';

import { maptiler, osm } from 'pigeon-maps/providers';

const provider =
  import.meta.env.VITE_MAPTILER_API_KEY && import.meta.env.VITE_GRAY === 'true'
    ? maptiler(import.meta.env.VITE_MAPTILER_API_KEY, 'basic-v2-light')
    : osm;
const initialCenter: [number, number] = [48.4033409828109, 11.76927756103885];
const PitMap = () => {
  // use id (optional) parameters to select a specific day
  const { id } = useParams();

  // hook used to keep updated from the size of window
  const { height, width } = useWindowDimensions();

  // define initial zoom
  const initialZoom = useMediaQuery(useTheme().breakpoints.down('sm')) ? 5 : 6;

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
  const [pinSize, setPinSize] = useState<string>('40');
  const updatePinSize = (zoom: number): void => {
    if (zoom >= 6) {
      setPinSize('60');
    } else if (zoom === 5) {
      setPinSize('40');
    } else {
      setPinSize('25');
    }
  };

  // function to close the modal and reset the map
  const closeModal = () => {
    resetMap();
    setOpen(false);
  };

  // function to define the location used by modal
  const defineLocation = (loc: location) => {
    setCenter([loc.lat, loc.lon]);
    //setZoom(8);
    setLocation(loc);
    setOpen(!open);
  };

  // effect that is used to check if an id is there, in case set the location
  useEffect(() => {
    if (typeof id !== 'undefined') {
      const loc = getDay(id);
      defineLocation(loc);
    }
  }, [id]);

  return (
    <>
      {!open && <Tour />}
      <div className="map">
        <Map
          provider={provider}
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
              .filter((l) => l.date !== '*')
              .map((loc) => {
                return (
                  <Overlay className="whiterose" key={loc.id} anchor={[loc.lat, loc.lon]} offset={[0, 0]}>
                    <img
                      src="/dm_round.webp"
                      alt="DM"
                      height={pinSize}
                      width={pinSize}
                      onClick={() => {
                        defineLocation(loc);
                      }}
                      aria-hidden="true"
                    />
                  </Overlay>
                );
              })}
        </Map>
      </div>
      {location && <Detail props={location} open={open} closeModal={closeModal} />}
    </>
  );
};

export default PitMap;
