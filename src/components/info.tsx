import React, { FC } from 'react';
import { location } from '../data/location';
import Picture from './picture';
import Concert from './concert';
import Casina from './casina';

const Info: FC<{ loc: location }> = ({ loc }) => {
  return (
    <div className="redrose">
      <Picture className="whiterose" type={loc ? loc.type : 'HOME'} concert={loc.id} />
      {loc.type === 'CONCERT' ? <Concert {...loc} /> : <Casina />}
    </div>
  );
};

export default Info;
