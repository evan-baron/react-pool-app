import { useState, useEffect } from "react";
import { v4 as UUID } from 'uuid';
import { NewPlayerForm } from "./NewPlayerForm";
import { PlayerList } from "./PlayerList";
export let activeGames = [];
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
        if (players.length > 4) {
            alert("You cannot have more than 5 players.")
            return;
        }

        setPlayers(currentPlayers => {
            return [
                ...currentPlayers,
                {
                    name: player,
                    id: newPlayerId
                }
            ]
        })

        playersData.push(
            {
                name: player,
                id: newPlayerId,
                '8-Ball': 0,
                '9-Ball': 0,
                '10-Ball': 0,
                'Rotation': 0,
                'One Pocket': 0,
                'total': 0
            }
        )
    }

    function deletePlayer(playerName) {
        setPlayers(currentPlayers => {
            //creates a new array (updatedPlayers) from currentPlayers while deleting the player (playerName)
            const updatedPlayers = currentPlayers.filter(player => player.name !== playerName);
            playersData = playersData.filter(player => player.name !== playerName);
            if (updatedPlayers.length === 0) {
                activeGames = []
            }
            //returns (replaces) the new array (updatedPlayers) as the existing array (currentPlayers)
            return updatedPlayers;
        });
    }    
    
    return (
        <>
            <NewPlayerForm onSubmit={addPlayer} />
            <PlayerList players={players} deletePlayer={deletePlayer}/>
        </>
    )
}