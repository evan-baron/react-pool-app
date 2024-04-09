import { playersData } from './PlayerTab';
import { games } from './Games';
import { activeGames } from './GameTab';
import { currentGame } from './GameTab';

export function ScoreTab() {

    console.log(playersData);

    return (
        <div className="scoreTab">
            <h2 className="scoresHeader">{currentGame.length > 0 ? `${currentGame[0].name} Score` : `No Current Game`}</h2>
            <div className="scoreCard">
                <div className="playerScore">
                    <div className="playerName">Player-1</div>
                    <div className="scoreBox">
                        <div className="upDown">-</div>
                        <div className="score">0</div>
                        <div className="upDown">+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}