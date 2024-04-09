export function PlayerScore({ currentScore, reduceScore, increaseScore }) {
    return (
        <div className="scoreBox">
                <div className="upDown" onClick={reduceScore}>-</div>
                <div className="score">{currentScore}</div>
                <div className="upDown" onClick={increaseScore}>+</div>
        </div>
    )
}