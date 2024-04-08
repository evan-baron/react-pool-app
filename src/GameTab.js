import { games } from './Games';
import React, { useState, useEffect } from 'react';

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

    const toggleActive = (game) => {
        // If the clicked index is already visible, hide it
        if (activeGame === game.id) {
            setActiveGame(null);
            localStorage.removeItem('selectedGame');
        } else {
            // Otherwise, show the rules associated with the clicked index
            setActiveGame(game.id);
            localStorage.setItem('selectedGame', JSON.stringify(game.id));
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