import React, { useState, useEffect } from 'react';
import { playersData } from './PlayerTab';
import { ScoreCard } from './ScoreCard';
import { games } from './Games';
import { activeGames } from './GameTab';
import { currentGame } from './GameTab';

export function ScoreTab() {
    // console.log(playersData);
    // console.log(playersData[0]);
    // console.log(playersData[0]['8-Ball']);
    // console.log(playersData.map((player) => {return player[currentGame[0].name]}));
    // console.log(currentGame[0].name);
    // console.log(`'${currentGame[0].name}'`);
    // let gameScore = `'${currentGame[0].name}'`;
    // console.log(gameScore);
    // console.log(toString(playersData[0][gameScore]));

    return (
        <div className="scoreTab">
            <h2 className="scoresHeader">{currentGame.length > 0 ? `${currentGame[0].name} Score` : `No Current Game`}</h2>
            {playersData.map((player) => 
                    <ScoreCard player={player} playerId={player.id}/>
                )
            }
        </div>
    )
}