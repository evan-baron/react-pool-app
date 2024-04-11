import { currentGame } from './GameTab';

export function PlayerScore({ player, currentScore, reduceScore, increaseScore }) {
    player[currentGame[0].name] = currentScore;

    return (
        <div className="scoreBox">
                <div className="upDown" onClick={reduceScore}>−</div>
                <div className="score">{currentScore}</div>
                <div className="upDown" onClick={increaseScore}>+</div>
        </div>
    )
}