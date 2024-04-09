import { PlayerScore } from './PlayerScore';
import { playersData } from './PlayerTab';
import { currentGame } from './GameTab';
import React, { useState, useEffect } from 'react';

export function ScoreCard({ player }) {
    const gameId = currentGame.length > 0 ? currentGame[0].id : null;
    const playerId = player.id;
    const [currentScore, setCurrentScore] = useState(() => {
        const savedScore = localStorage.getItem(`savedScore_${playerId}_${gameId}`);
        if (savedScore == null) {
            return playersData[0][currentGame[0].name];
        }
        return JSON.parse(savedScore)
    });

    useEffect(() => {
        localStorage.setItem(`savedScore_${playerId}_${gameId}`, JSON.stringify(currentScore))
    }, [currentScore, playerId, gameId]);
    
    function reduceScore() {
        if (currentScore > 0) {
            setCurrentScore(prevScore => prevScore - 1);
        }
    }

    function increaseScore() {
        setCurrentScore(prevScore => prevScore + 1);
    }

    return (
        <li key={player.id} className="scoreCard">
            <div className="playerName">{player.name}</div>
            <PlayerScore player={player} currentScore={currentScore} reduceScore={reduceScore} increaseScore={increaseScore} />
        </li>
    )
}