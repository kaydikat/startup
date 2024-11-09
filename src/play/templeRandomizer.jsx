import templeData from './public/temples.json'
import React, { useState, useEffect } from 'react';

function RandomTemple() {
  const [templeName, setTempleName] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * templeData.length);
    const temple = templeData[randomIndex];
    setTempleName(temple.Temple);
  }, []);

  return (
    <div>
      <h2>Random Temple</h2>
      <h3>{temple.Temple}</h3>
    </div>
  );
}

export default RandomTemple;