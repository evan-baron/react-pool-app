import {games} from './Games';
import React, { useState } from 'react';

// function GameTab() {
//     const [elementVisible, setElementVisible] = useState(Array(games.length).fill(false));
//     const toggleVisibility = (index) => {
//         const newVisibility = [...elementVisible];
//         newVisibility[index] = !newVisibility[index];
//         setElementVisible(newVisibility);
//     };
    
//     return (
//         <div className='gametab'>
//             <nav>
//                 <ul>
//                     {
//                         games.map((game, index) =>
//                             <React.Fragment key={game.toString()}>
//                                 <li onClick={() => toggleVisibility(index)}>{game.name}</li>
//                                 {
//                                     elementVisible[index] && (
//                                         <div className='rules'>{game.rules}</div>
//                                     )
//                                 }
//                             </React.Fragment>
//                         )
//                     }
//                 </ul>
//             </nav>
//         </div>
//     )
// }

function GameTab() {
    const [activeIndex, setActiveIndex] = useState(null); // Track the index of the currently visible rules

    const toggleActive = (index) => {
        // If the clicked index is already visible, hide it
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            // Otherwise, show the rules associated with the clicked index
            setActiveIndex(index);
        }
    };
    
    return (
        <div className='gametab'>
            <nav>
                <ul>
                    {games.map((game, index) =>
                        <React.Fragment key={game.toString()}>
                            <li className={activeIndex === index ? 'active' : ''} onClick={() => toggleActive(index)}>{game.name}</li>
                        </React.Fragment>
                    )}
                </ul>
            </nav>
        </div>
    );
}


export default GameTab;