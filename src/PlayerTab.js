import { useState, useEffect } from "react";
import { v4 as UUID } from 'uuid';
import { NewPlayerForm } from "./NewPlayerForm";
import { PlayerList } from "./PlayerList";
export const testPlayers = ['test', 'abc'];
export let playersData = [];

export function PlayerTab() {
    const [players, setPlayers] = useState(() => {
        const localValue = localStorage.getItem('savedPlayers')
        if (localValue == null) {
            return []
        }
        return JSON.parse(localValue)
    })

    const newPlayerId = UUID();

    useEffect(() => {
        localStorage.setItem('savedPlayers', JSON.stringify(players))
    }, [players]);

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
            //creates a new array (updatedPlayers) from currentPlayers while deleting the player (playerName)
            const updatedPlayers = currentPlayers.filter(player => player.name !== playerName);
            playersData = playersData.filter(player => player.name !== playerName);
            //returns (replaces) the new array (updatedPlayers) as the existing array (currentPlayers)
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