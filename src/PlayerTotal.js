import React from "react";
import { playersData } from "./PlayerTab";

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

    // let namearr = [];
    // namearr.push(player.name);
    // namearr.push(`'s Total: `);
    // namearr.push(player.total);
    // console.log(namearr);
    // let namestring = namearr.join("");
    // console.log(namestring);

    return (
        <li className="playerTotal">{player.name}'s total: {player.total}</li>
    )
}