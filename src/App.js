import './reset.css';
import './App.css';
import { PlayerTab } from './PlayerTab';
import { GameTab } from './GameTab';
import { ScoreTab } from './ScoreTab';
import React, { useState, useEffect } from 'react';
import { playersData } from './PlayerTab';

function App() {
  const [showPlayerTab, setShowPlayerTab] = useState(true);
  const [showGameTab, setShowGameTab] = useState(false);
  const [showScoreTab, setShowScoreTab] = useState(false);
  
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  function handleTabClick(tab) {
    //both ifs below make it so that you must have a minimum of two players to continue
    if (tab === 'game' && playersData.length < 2) {
      return;
    }

    if (tab === 'score' && playersData.length < 2) {
      return;
    }

    setShowGameTab(tab === 'game');
    setShowPlayerTab(tab === 'player');
    setShowScoreTab(tab === 'score');
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li className={showPlayerTab ? 'active' : ''} onClick={() => handleTabClick('player')}>Players</li>
            <li className={showGameTab ? 'active' : ''} onClick={() => handleTabClick('game')}>Game</li>
            <li className={showScoreTab ? 'active' : ''} onClick={() => {handleTabClick('score')}}>Score</li>
          </ul>
        </nav>
      </header>
      {showPlayerTab && <PlayerTab />}
      {showGameTab && <GameTab />}
      {showScoreTab && <ScoreTab />}
    </>
  );
}

export default App;