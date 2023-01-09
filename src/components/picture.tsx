import CardMedia from '@mui/material/CardMedia';
import React, { FC, useEffect, useState } from 'react';
import { getPic } from '../utils/concert';
import '../styles/picture.css';

const Picture: FC<{ type?: string; className?: string; concert?: string | number }> = ({
  type,
  className,
  concert,
}) => {
  const [c, setC] = useState(typeof concert === 'string' ? concert : getPic('CONCERT', concert));
  useEffect(() => {
    if (typeof concert === 'undefined') {
      setC(getPic('CONCERT', c));
    }
  }, [concert]);
  const pic = type === 'HOME' ? `home/${getPic('HOME')}` : `concert/${c}`;
  return (
    <>{pic && <CardMedia className={className} component="img" alt={type} image={`/images/${pic}`} loading="lazy" />}</>
  );
};

export default Picture;
