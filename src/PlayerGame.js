import React from "react";

export function PlayerGame({ player, game }) {
    if (player[game] > 0) {
        return (
            <li className="playerGame">{game}: {player[game]}</li>
        )
    }
}