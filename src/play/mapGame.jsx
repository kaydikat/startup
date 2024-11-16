import React, { useState, useEffect } from 'react';
import templeData from '../data/temples.json';
import { GameNotifier, GameEvent } from './gameNotifier';

export function MapGame(props) {
    const [currentTempleIndex, setCurrentTempleIndex] = useState(0);
    const [templeNumber, setTempleNumber] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [guessError, setGuessError] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const userName = props.userName;
    const currentTemple = templeData[currentTempleIndex];

    const nextTemple = () => {
        if (templeNumber < 5) {
            setTempleNumber(templeNumber + 1);
            setCurrentTempleIndex((currentTempleIndex + 1) % templeData.length);
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

        setTotalScore(totalScore + fakeScore);
        setGuessError(guessError + fakeGuess);

        nextTemple();
    }

    const resetGame = () => {
      setCurrentTempleIndex(0);
      setTempleNumber(1);
      setTotalScore(0);
      setGuessError(0);
      setGameOver(false);
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

    return (
        <div className="map-game">
          <h2>
            Temple {templeNumber} of 5: {currentTemple ? currentTemple.Temple : 'Unknown Temple'}
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
            <p>Guess Error: {guessError}</p>
          </div>
        </div>
      );
    }