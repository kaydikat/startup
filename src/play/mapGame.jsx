import React, { useState, useEffect } from 'react';
import templeData from '../data/temples.json';

export function MapGame() {
    const [currentTempleIndex, setCurrentTempleIndex] = useState(0);
    const [templeNumber, setTempleNumber] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [guessError, setGuessError] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const currentTemple = templeData[currentTempleIndex];

    const nextTemple = () => {
        if (templeNumber < 5) {
            setTempleNumber(templeNumber + 1);
            setCurrentTempleIndex((currentTempleIndex + 1) % templeData.length);
        } else {
            setGameOver(true);
        }
    }

    const handleMapClick = (event) => {
        const fakeScore = Math.floor(Math.random() * 1000);
        const fakeGuess = Math.floor(Math.random() * 1000);

        setTotalScore(totalScore + fakeScore);
        setGuessError(guessError + fakeGuess);

        setTimeout(() => {
            nextTemple();
        }, 1000);
    }
}