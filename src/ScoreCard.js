import { PlayerScore } from './PlayerScore';
import { currentGame } from './GameTab';
import React, { useState, useEffect } from 'react';

export function ScoreCard({ player }) {
    const gameId = currentGame.length > 0 ? currentGame[0].id : null;
    const playerId = player.id;
    const [currentScore, setCurrentScore] = useState(() => {
        const savedScore = localStorage.getItem(`savedScore_${playerId}_${gameId}`);
        //makes sure when adding a new player after game has started and scores have been entered that new player begins with 0
        if (savedScore == null) {
            return 0;
        }
        return JSON.parse(savedScore)
    });

    useEffect(() => {
        localStorage.setItem(`savedScore_${playerId}_${gameId}`, JSON.stringify(currentScore))
    }, [currentScore, playerId, gameId]);
    
    function reduceScore() {
        if (currentScore > 0) {
            setCurrentScore(prevScore => prevScore - 1);
            player.total -= 1;
        }
    }

    function increaseScore() {
        setCurrentScore(prevScore => prevScore + 1);
        player.total += 1;
    }

    return (
        <li key={player.id} className="scoreCard">
            <div className="playerName">{player.name}</div>
            <PlayerScore player={player} currentScore={currentScore} reduceScore={reduceScore} increaseScore={increaseScore} />
        </li>
    )
}