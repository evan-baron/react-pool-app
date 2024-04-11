import React from 'react';
import { activeGames } from './PlayerTab';
import { playersData } from './PlayerTab';
import { PlayerFinal } from './PlayerFinal';
export let activeScores =[];

export function TotalScoreTab({ finishGame }) {
    activeScores = [];
        
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
        } 
    }
    
    function goBack() {
        finishGame();
    }

    function resetGame() {
        window.location.reload();
    }

    if (activeScores.length !== 0) {
        return (
            <>
                <div className="shader"></div>
                <div className="totalContainer">
                    <div className="totalBox">
                        <h2 className="totalHeader">Final Score</h2>
                        <div className="finalContainer">
                            {playersData.map((player) => {
                                return (
                                    <PlayerFinal key={player.id} player={player} />
                                )
                            })}
                        </div>
                        <div className="btnBox">
                            <div className="btn backBtn" onClick={goBack}>Back</div>
                            <div className="btn backBtn" onClick={resetGame}>Done</div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="shader"></div>
                <div className="totalContainer">
                    <div className="totalBox">
                        <h2 className="noTotal">You haven't entered any scores yet!<br></br>You should go play some games!</h2>
                        <div className="btnBox">
                            <div className="btn backBtn" onClick={goBack}>Back</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}