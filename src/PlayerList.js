import { PlayerItem } from "./PlayerItem";

export function PlayerList({ players, deletePlayer }) {
    return (
        <div className="playersList">
            {players.length > 0 ? <h2 className="playersHeader">Players:</h2> : null}
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