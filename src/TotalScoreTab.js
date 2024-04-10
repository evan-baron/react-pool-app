import React from 'react';
import { activeGames } from './PlayerTab';
import { playersData } from './PlayerTab';
export let activeScores =[];

export function TotalScoreTab({ finishGame }) {
    activeScores = [];
    
    console.log(activeGames);
    
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
    
    console.log(activeScores);
    console.log(playersData);

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
                {/* this is where I will put a component that maps all active players, inside will contain an additional map function to line out all game scores greater than 0, if the player has no game scores greater than 0, it will just say "Player won 0 games."*/}
                <div className="btnBox">
                    <div className="backBtn" onClick={goBack}>Back</div>
                    <div className="backBtn" onClick={resetGame}>Done</div>
                </div>
            </div>
        </>
        )
}