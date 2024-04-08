import { games } from './Games';
import React, { useState } from 'react';

function GameTab() {
    const [activeGame, setActiveGame] = useState(null); // Track the index of the currently visible rules

    const toggleActive = (game) => {
        // If the clicked index is already visible, hide it
        if (activeGame === game) {
            setActiveGame(null);
        } else {
            // Otherwise, show the rules associated with the clicked index
            setActiveGame(game);
        }
    };
    
    return (
        <div className='gametab'>
            <nav>
                <ul>
                    {games.map((game, index) =>
                        <React.Fragment key={game.id}>
                            <li className={activeGame === game ? 'active' : ''} onClick={() => toggleActive(game)}>{game.name}</li>
                        </React.Fragment>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default GameTab;