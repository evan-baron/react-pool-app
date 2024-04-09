import React, { useState, useEffect } from 'react';
import { playersData } from './PlayerTab';
import { ScoreCard } from './ScoreCard';
import { games } from './Games';
import { activeGames } from './GameTab';
import { currentGame } from './GameTab';

export function ScoreTab() {
    return (
        <div className="scoreTab">
            <h2 className="scoresHeader">{currentGame.length > 0 ? `${currentGame[0].name} Score` : `No Current Game`}</h2>
            {currentGame.length > 0 ? (playersData.map((player) => 
                    <ScoreCard key={player.id} player={player} playerId={player.id}/>
                )) : null
            }
        </div>
    )
}