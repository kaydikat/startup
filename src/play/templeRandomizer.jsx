import React, { useState, useEffect } from 'react';
import templeData from '../data/temples.json';

export function RandomTemple() {
  const [templeName, setTempleName] = useState('');
  const [count, setCount] = useState(0);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    // Ensure that templeData is an array
    if (Array.isArray(templeData) && templeData.length > 0) {
      const randomIndex = Math.floor(Math.random() * templeData.length);
      const temple = templeData[randomIndex];
      setTempleName(temple.Temple);
      setCount(prevCount => prevCount + 1);
    } else {
      console.error('Temple data is not an array or is empty.');
    }
  }, []);

  return (
    <div>
      <h3>#{count} { templeName }</h3>
    </div>
  );
}