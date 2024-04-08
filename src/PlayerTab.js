import { useState } from "react";
import { v4 as UUID } from 'uuid';
import { NewPlayerForm } from "./NewPlayerForm";
import { PlayerList } from "./PlayerList";

function PlayerTab() {
    const [players, setPlayers] = useState([]);
    const newPlayerId = UUID();

    function addPlayer(player) {
        setPlayers(currentPlayers => {
            return [
                ...currentPlayers,
                {
                    name: player,
                    id: newPlayerId,
                    '8-ball': 0,
                    '9-ball': 0,
                    '10-ball': 0,
                    'Rotation': 0,
                    'One-pocket': 0,
                    'Total': 0
                }
            ]
        })

        playersData.push(
            {
                name: player,
                id: newPlayerId,
                '8-ball': 0,
                '9-ball': 0,
                '10-ball': 0,
                'Rotation': 0,
                'One-pocket': 0,
                'Total': 0
            }
        )
    }

    function deletePlayer(playerName) {
        setPlayers(currentPlayers => {
            // Filter the players array to remove the player with the specified name
            const updatedPlayers = currentPlayers.filter(player => player.name !== playerName);
            // Filter the playersData array to remove the player's data
            playersData = playersData.filter(data => data.name !== playerName);
            return updatedPlayers;
        });
    }    
    
    console.log('players:');
    console.log(players);
    console.log('playersData:')
    console.log(playersData);
    
    return (
        <>
        <NewPlayerForm onSubmit={addPlayer} />
        <PlayerList players={players} deletePlayer={deletePlayer}/>
        </>
    )
}

export const testPlayers = ['test', 'abc'];
export let playersData = [];
export default PlayerTab;