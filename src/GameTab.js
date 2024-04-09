import { games } from './Games';
import React, { useState, useEffect } from 'react';
import { playersData } from './PlayerTab';
import { activeGames } from './PlayerTab';
export let currentGame = [];

export function GameTab() {
    const [activeGame, setActiveGame] = useState(() => {
        return JSON.parse(localStorage.getItem('selectedGame')) || null;
    }); // Track the index of the currently visible rules

    useEffect(() => {
        const savedGame = JSON.parse(localStorage.getItem('selectedGame'));
        if (savedGame !== activeGame) {
            setActiveGame(savedGame);
        }
    }, [activeGame]);

    function toggleActive(game) {
        if (activeGame !== game.id) {
            setActiveGame(game.id);
            localStorage.setItem('selectedGame', JSON.stringify(game.id));

            //puts the clicked games into activeGames array for scorekeeping tab
            if (playersData.length > 0 && !activeGames.includes(game.id)) {
                activeGames.push(game.id);
            }
            currentGame = [];
            currentGame.push(game);
        }
    };
    
    return (
        <div className='gametab'>
            <nav>
                <ul>
                    {games.map((game) =>
                        <React.Fragment key={game.id}>
                            <li 
                                key={game.id} 
                                className={activeGame === game.id ? 'active' : ''} 
                                onClick={() => toggleActive(game)}
                            >{game.name}</li>
                        </React.Fragment>
                    )}
                </ul>
            </nav>
        </div>
    );
}