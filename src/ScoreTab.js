import React, { useState } from 'react';
import { playersData } from './PlayerTab';
import { ScoreCard } from './ScoreCard';
import { currentGame } from './GameTab';
import { TotalScoreTab } from './TotalScoreTab';

export function ScoreTab({ handleTabClick }) {
    const [totalVisible, setTotalVisible] = useState(false);

    function finishGame() {
        setTotalVisible(!totalVisible)
    }

    return (
        <div className="scoreTab">
            <h2 className="scoresHeader">{currentGame.length > 0 ? `${currentGame[0].name} Score` : `No Current Game`}</h2>
            <ul className="sCardContainer">
                {currentGame.length > 0 ? (playersData.map((player) => 
                        <ScoreCard key={player.id} player={player} playerId={player.id}/>
                    )) : null
                }
            </ul>
            {totalVisible && <TotalScoreTab finishGame={finishGame} />}
            <div class="scoreBtns">
                <div className="btn changeGame" onClick={() => handleTabClick('game')}>Change Game</div>
                <div className="btn finishGame" onClick={finishGame}>Finish</div>
            </div>
        </div>
    )
}