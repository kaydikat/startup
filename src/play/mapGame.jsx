import React, { useState, useEffect } from 'react';
import templeData from '../data/temples.json';

export function MapGame() {
    const [currentTempleIndex, setCurrentTempleIndex] = useState(0);
    const [templeNumber, setTempleNumber] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [guessError, setGuessError] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const currentTemple = templeData[currentTempleIndex];
}