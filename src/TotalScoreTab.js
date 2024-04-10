import React from 'react';
import { activeGames } from './PlayerTab';
import { playersData } from './PlayerTab';
import { PlayerFinal } from './PlayerFinal';
export let activeScores =[];

export function TotalScoreTab({ finishGame }) {
    activeScores = [];
    
    // console.log(activeGames);
    
    for (let i=0; i<activeGames.length; i++) {
        let gameFound = true;
        for (let k=0; k<playersData.length; k++) {
            if (playersData[k][activeGames[i]] !== 0) {
                gameFound = false;
                break;
            }
        }
        if (!gameFound) {
            activeScores.push(activeGames[i]);
        } else {
            console.log(`At player data for game '${activeGames[i]}' is 0.`);
        }
    }
    
    // console.log(activeScores);
    // console.log(playersData);

    function goBack() {
        finishGame();
    }

    function resetGame() {
        window.location.reload();
    }
    
    return (
        <>
            <div className="shader"></div>
            <div className="totalContainer">
                <h2 className="totalHeader">Final Score</h2>
                <div className="finalContainer">
                    {playersData.map((player) => {
                        return (
                            <PlayerFinal key={player.id} player={player} />
                        )
                    })}
                </div>
                <div className="btnBox">
                    <div className="backBtn" onClick={goBack}>Back</div>
                    <div className="backBtn" onClick={resetGame}>Done</div>
                </div>
            </div>
        </>
        )
}