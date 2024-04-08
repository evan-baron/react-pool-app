import './reset.css';
import './App.css';
import { PlayerTab } from './PlayerTab';
import { GameTab } from './GameTab';
import { ScoreTab } from './ScoreTab';
import React, { useState, useEffect } from 'react';

function App() {
  const [showPlayerTab, setShowPlayerTab] = useState(true);
  const [showGameTab, setShowGameTab] = useState(false);
  const [showScoreTab, setShowScoreTab] = useState(false);

  const handleTabClick = (tab) => {
    setShowGameTab(tab === 'game');
    setShowPlayerTab(tab === 'player');
    setShowScoreTab(tab === 'score');
  }

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  return (
    <>
    <header>
      <nav>
        <ul>
          <li className={showPlayerTab && 'active'} onClick={() => handleTabClick('player')}>Players</li>
          <li className={showGameTab && 'active'} onClick={() => handleTabClick('game')}>Game</li>
          <li className={showScoreTab && 'active'} onClick={() => handleTabClick('score')}>Score</li>
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