import { Map, Marker } from 'pigeon-maps';
import React, { useState } from 'react';

import data from './data/locations.json';
import useWindowDimensions from './hooks/useWindowDimensions';

// import { maptiler } from "pigeon-maps/providers";

// const maptilerProvider = maptiler(process.env.REACT_APP_MAPTILER_API_KEY, "basic-v2-light");

const PitMap = () => {
  const { height, width } = useWindowDimensions();
  const [center, setCenter] = useState([47.39033, 8.48588]);
  const [zoom, setZoom] = useState(6);

  return (
    <Map
      // provider={maptilerProvider}
      height={height}
      width={width}
      center={[center[0], center[1]]}
      zoom={zoom}
      minZoom={5}
      onClick={() => setZoom(6)}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
    >
      {data.map((loc) => (
        <Marker
          width={50}
          anchor={[loc.lat, loc.lon]}
          onClick={() => {
            setCenter([loc.lat, loc.lon]);
            setZoom(8);
          }}
        />
      ))}
    </Map>
  );
};

export default PitMap;
