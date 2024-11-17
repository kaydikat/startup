import React, { useState, useEffect } from 'react';
import templeData from '../data/temples.json';
import { GameNotifier, GameEvent } from './gameNotifier';

import './mapGame.css';

export function MapGame(props) {
  const {
    userName,
    myLat: userLatitude,
    myLong: userLongitude,
  } = props;

  const [currentTempleIndex, setCurrentTempleIndex] = useState(null);
  const [templeNumber, setTempleNumber] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [guessError, setGuessError] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [temple, setTemple] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (templeNumber <= 5) {
      selectRandomTemple();
    }
  }, [templeNumber]);

  const selectRandomTemple = () => {
    if (Array.isArray(templeData) && templeData.length > 0) {
      const randomIndex = Math.floor(Math.random() * templeData.length);
      const selectedTemple = templeData[randomIndex];
      setCurrentTempleIndex(randomIndex);
      setTemple(selectedTemple);
    } else {
      console.error('Temple data is not an array or is empty.');
    }
  };

  const nextTemple = () => {
    if (templeNumber < 5) {
      setTempleNumber(templeNumber + 1);
    } else {
      setGameOver(true);
      saveScore(totalScore);
    }
  };

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    // Let other players know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
  }

  const handleMapClick = (event) => {
    const fakeScore = Math.floor(Math.random() * 1000);
    const fakeGuess = Math.floor(Math.random() * 1000);

    const templeLatitude = parseFloat(temple.Latitude);
    const templeLongitude = parseFloat(temple.Longitude);

    const distanceInKm = calculateDistance(
      userLatitude,
      userLongitude,
      templeLatitude,
      templeLongitude
    );

    setDistance(distanceInKm);

    setTotalScore(totalScore + fakeScore);
    setGuessError(guessError + fakeGuess);

    nextTemple();
  };

  const resetGame = () => {
    setTempleNumber(1);
    setTotalScore(0);
    setGuessError(0);
    setGameOver(false);
    setDistance(null);
    selectRandomTemple();
  };

  if (gameOver) {
    return (
      <div className="game-over">
        <h2>Game Over</h2>
        <p>Your total score is: {totalScore}</p>
        <button onClick={resetGame}>Play Again</button>
      </div>
    );
  }

  // **Add the null check here**
  if (!temple) {
    return <div>Loading...</div>;
  }

  function calculateDistance(lat1, lon1, lat2, lon2) {
    // Haversine formula
    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const R = 6371; // Earth's radius in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  }

  return (
    <div className="map-game">
      <h2>
        Temple {templeNumber} of 5: {temple.Temple}
      </h2>
      <div className="map-container" onClick={handleMapClick}>
        <img
          src="world_map.png"
          alt="World Map"
          style={{ width: '100%', cursor: 'pointer' }}
        />
      </div>
      <div className="score-info">
        <p>Total Score: {totalScore}</p>
        <p>Your Distance from {temple.Temple}: {distance} </p>
        <p>Guess Error: {guessError}</p>
      </div>
    </div>
  );
}
