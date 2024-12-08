import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
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
  const [lastDistance, setLastDistance] = useState(null);
  const [lastTempleName, setLastTempleName] = useState('');

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

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };
  
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newScore),
      credentials: 'include',
    });
  
    const scores = await response.json();
    console.log('High scores:', scores);
  
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
  }

  function MapClickHandler() {
    useMapEvent('click', (e) => {
      const clickedLatitude = e.latlng.lat;
      const clickedLongitude = e.latlng.lng;
      handleMapClick(clickedLatitude, clickedLongitude); 
    });
    return null;
  }

  const handleMapClick = (clickedLatitude, clickedLongitude) => {
    if (!temple) {
      return;
    }

    const templeLatitude = parseFloat(temple.Latitude);
    const templeLongitude = parseFloat(temple.Longitude);

    // Distance from user's IP-based location to temple:
    const distanceForUser = calculateDistance(
      userLatitude,
      userLongitude,
      templeLatitude,
      templeLongitude
    );

    // Distance from clicked location to temple:
    const distanceForClick = calculateDistance(
      clickedLatitude,
      clickedLongitude,
      templeLatitude,
      templeLongitude
    );

    // Scoring logic:
    // If distanceForClick <= 5000 miles, score scales linearly from 1000 at 0 mi to 0 at 5000 mi.
    const maxScore = 1000;
    let gainedScore = 0;
    const maxDistanceForPoints = 5000;
    if (distanceForClick < maxDistanceForPoints) {
      gainedScore = Math.round(maxScore * (1 - (distanceForClick / maxDistanceForPoints)));
    } else {
      gainedScore = 0;
    }

    const newTotalScore = totalScore + gainedScore;
    setTotalScore(newTotalScore);
    setGuessError(distanceForClick);
    setLastDistance(distanceForUser);
    setLastTempleName(temple.Temple);

    if (templeNumber < 5) {
      setTempleNumber(prevNumber => prevNumber + 1);
    } else {
      setGameOver(true);
      saveScore(newTotalScore);
    }
  };

  const resetGame = () => {
    setTempleNumber(1);
    setTotalScore(0);
    setGuessError(0);
    setGameOver(false);
    setLastDistance(null);
    setLastTempleName('');
    selectRandomTemple();

    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  };

  if (!temple) {
    return <div>Loading...</div>;
  }

  function calculateDistance(lat1, lon1, lat2, lon2) {
    // Haversine formula
    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const R = 6371; // km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceKm = R * c; 

    const distanceMiles = distanceKm * 0.621371;
    const roundedDistance = Math.round(distanceMiles * 10) / 10;

    return roundedDistance;
  }

  return (
    <div className="map-game">
      {gameOver ? (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>Your total score is: {totalScore}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <>
          <h2>
            Temple {templeNumber} of 5: {temple.Temple}
          </h2>
          <div className="map-container">
            <MapContainer
              center={[20,0]}
              zoom={1.5}
              style={{ width: '100%', height: '500px' }}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapClickHandler />
            </MapContainer>
          </div>
        </>
      )}
      {lastDistance !== null && (
        <div className="score-info">
          <p>Your Distance from {lastTempleName}: {lastDistance} mi</p>
          <p>Total Score: {totalScore}</p>
          <p>Guess Error: {guessError} mi</p>
        </div>
      )}
    </div>
  );
}
