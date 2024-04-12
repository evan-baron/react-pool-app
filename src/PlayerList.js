import { PlayerItem } from "./PlayerItem";

export function PlayerList({ players, deletePlayer }) {
    return (
        <div className="playersList">
            {/* OPTIONAL ALTERNATIVE TO DISPLAY BELOW */}
            {/* {players.length > 0 ? <h2 className="playersHeader">Players:</h2> : <h2 className="playersRule">Add at least two players to start a game!</h2>} */}
            <h2 className="playersHeader">Players:</h2>
            {!players.length > 0 ? <h2 className="playersRule">You need at least two players to start a game!</h2> : null}
            <ul className="pListContainer">
                {players.map((player) => {
                    return (
                        <PlayerItem {...player} key={player.id} deletePlayer={deletePlayer}/>
                    )
                })}
            </ul>
        </div>
    )
}