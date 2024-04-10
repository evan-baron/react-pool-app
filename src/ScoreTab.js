import React, { useState } from 'react';
import { playersData } from './PlayerTab';
import { ScoreCard } from './ScoreCard';
import { currentGame } from './GameTab';
import { TotalScoreTab } from './TotalScoreTab';

export function ScoreTab() {
    const [totalVisible, setTotalVisible] = useState(false);

    function finishGame() {
        setTotalVisible(!totalVisible)
    }

    return (
        <div className="scoreTab">
            <h2 className="scoresHeader">{currentGame.length > 0 ? `${currentGame[0].name} Score` : `No Current Game`}</h2>
            {currentGame.length > 0 ? (playersData.map((player) => 
                    <ScoreCard key={player.id} player={player} playerId={player.id}/>
                )) : null
            }
            {totalVisible && <TotalScoreTab finishGame={finishGame} />}
            {currentGame.length > 0 && playersData.length > 0 ? <div className="finishGame" onClick={finishGame}>Finish</div> : null}
        </div>
    )
}