import { useState } from "react";
import { playersData } from "./PlayerTab";

export function NewPlayerForm({ onSubmit }) {
    const [newPlayer, setNewPlayer] = useState("");

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
        if (playersData.some(player => player.name === newPlayer)) {
            alert("This name is already taken. Please choose another one.");
            return;
        }
               
        onSubmit(newPlayer)
        
        setNewPlayer("");
    }

    return (
        <form className="addPlayerCard" onSubmit={handleSubmit}>
            <div className="playerInputCard">
                <label className="playersHeader">New Player</label>
                <div className="inputContainer">
                    <input 
                        className="playerInput" 
                        placeholder="Player Name" 
                        type="text" 
                        value={newPlayer} 
                        onChange={e => setNewPlayer(e.target.value)}
                        />
                    <button className="btn addPlayer">Add</button>
                </div>
            </div>
        </form>
    )
}