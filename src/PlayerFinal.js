import React from 'react';
import { PlayerTotal } from './PlayerTotal';
import { PlayerGame } from './PlayerGame';
import { activeScores } from "./TotalScoreTab";

export function PlayerFinal({ player }) {
    return (
        <div className="playerFinal">
            <PlayerTotal player={player} />
            <ul>
                {activeScores.map((game) => {
                    return (
                        <PlayerGame key={`${player.id}_${game}`} player={player} game={game} />
                    )
                })}
            </ul>
        </div>
    )
}