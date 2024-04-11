import React from "react";

export function PlayerTotal({ player }) {

    // IF YOU WANT SOMETHING MORE THAN JUST "TOTAL:"

    // if (player.total !== 0) {
    //     return (
    //         <li className="playerTotal">{player.name}'s Total: {player.total}</li>
    //     )
    // } else {
    //     return (
    //         <li className="playerTotal">{player.name}' did not win any games.'</li>
    //     )
    // }

    return (
        <li className="playerTotal">{player.name}'s total: {player.total}</li>
    )
}