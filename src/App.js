import './reset.css';
import './App.css';
import GameTab from './GameTab';
import PlayerTab from './PlayerTab';
import ScoreTab from './ScoreTab';
import React, { useState } from 'react';

function App() {
  const [showGameTab, setShowGameTab] = useState(true);
  const [showPlayerTab, setShowPlayerTab] = useState(false);
  const [showScoreTab, setShowScoreTab] = useState(false);

  const handleTabClick = (tab) => {
    setShowGameTab(tab === 'game');
    setShowPlayerTab(tab === 'player');
    setShowScoreTab(tab === 'score');
  }

  return (
    <>
    <header>
      <nav>
        <ul>
          <li className={showGameTab && 'active'} onClick={() => handleTabClick('game')}>Game</li>
          <li className={showPlayerTab && 'active'} onClick={() => handleTabClick('player')}>Players</li>
          <li className={showScoreTab && 'active'} onClick={() => handleTabClick('score')}>Score</li>
        </ul>
      </nav>
    </header>
    {showGameTab && <GameTab />}
    {showPlayerTab && <PlayerTab />}
    {showScoreTab && <ScoreTab />}
    </>
  );
}

export default App;