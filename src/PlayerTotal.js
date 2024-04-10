import React from "react";

export function PlayerTotal({ player }) {
    if (player.total !== 0) {
        return (
            <li className="playerTotal">{player.name}'s Total Games Won: {player.total}</li>
        )
    } else {
        return (
            <li className="playerTotal">{player.name} did not win any games.</li>
        )
    }
}