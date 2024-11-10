import React, { useState, useEffect } from 'react';
import templeData from '../data/temples.json';

export function RandomTemple() {
  const [templeName, setTempleName] = useState('');
  let counter = 1;

  useEffect(() => {
    // Ensure that templeData is an array
    if (Array.isArray(templeData) && templeData.length > 0) {
      const randomIndex = Math.floor(Math.random() * templeData.length);
      const temple = templeData[randomIndex];
      setTempleName(temple.Temple);
    } else {
      console.error('Temple data is not an array or is empty.');
    }
  }, []);

  return (
    <div>
      <h3>{templeName || 'No temple available'}</h3>
    </div>
  );
}