//this is the original playertab before refactoring into components

import { useState } from "react";
import { v4 as UUID } from 'uuid';

function PlayerTab() {
    const [newPlayer, setNewPlayer] = useState("");
    const [players, setPlayers] = useState([]);
    
    function handleSubmit(e) {
        //this prevents the form from submitting without clicking the add button
        e.preventDefault()

        //testing name length
        if (newPlayer.length === 0) {
            alert("You must enter a name!")
            return;
        } else if(newPlayer.length > 12) {
            alert("Player name must be no longer than 12 characters");
            return;
        }

        //testing to see if player name has bad characters
        const pattern = /^[A-Za-z0-9_.-\s]+$/;
        if (!pattern.test(newPlayer)) {
            alert("Name contains invalid characters! Please only use letters, numbers, spaces, periods, or underscores.");
            return;
        }

        //testing to see if preexisting player name already
        if (players.some(player => player.name === newPlayer)) {
            alert("This name is already taken. Please choose another one.");
            return;
        }
        
        const newPlayerId = UUID();

        setPlayers(currentPlayers => {
            return [
                ...currentPlayers,
                {
                    name: newPlayer,
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
                name: newPlayer,
                id: newPlayerId,
                '8-ball': 0,
                '9-ball': 0,
                '10-ball': 0,
                'Rotation': 0,
                'One-pocket': 0,
                'Total': 0
            }
        )

        setNewPlayer("");
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
        <form className="addPlayerCard" onSubmit={handleSubmit}>
            <div className="playerInputCard">
                <label className="playersHeader">New Player</label>
                <input 
                    className="playerInput" 
                    placeholder="Player Name" 
                    type="text" 
                    value={newPlayer} 
                    onChange={e => setNewPlayer(e.target.value)}
                    />
                <button className="btn addPlayer">Add</button>
            </div>
        </form>
        <ul className="playersList">
            {players.length > 0 ? <h2 className="playersHeader">Players</h2> : null}
            {players.map((player, id) => {
                return (
                    <li key={id} className="playerRow">
                        <label>
                            {player.name}
                        </label>
                        <button className="btn delete" onClick={() => deletePlayer(player.name)}>Remove</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
    
}

export const testPlayers = ['test', 'abc'];
export let playersData = [];
export default PlayerTab;