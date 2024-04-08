import { Player } from "./Player";

export function PlayerList({ players, deletePlayer }) {
    return (
        <ul className="playersList">
            {players.length > 0 ? <h2 className="playersHeader">Players</h2> : null}
            {players.map((player, id) => {
                return (
                    <Player {...player} key={player.id} deletePlayer={deletePlayer}/>
                )
            })}
        </ul>
    )
}