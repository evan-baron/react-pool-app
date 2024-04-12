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
  const [showGameNav, setShowGameNav] = useState(false);
  const [showScoreNav, setShowScoreNav] = useState(false);
  
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

  function gameNavVisible(param) {
    setShowGameNav(param)
  }

  function scoreNavVisible(param) {
    setShowScoreNav(param)
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li className={showPlayerTab ? 'playersNav active' : 'playersNav'} onClick={() => handleTabClick('player')}>Players</li>
            {showGameNav && <li className={showGameTab ? 'gameNav active' : 'gameNav'} onClick={() => handleTabClick('game')}>Game</li>}
            {showScoreNav && <li className={showScoreTab ? 'scoreNav active' : 'scoreNav'} onClick={() => {handleTabClick('score')}}>Score</li>}
          </ul>
        </nav>
      </header>
      {showPlayerTab && <PlayerTab gameNavVisible={gameNavVisible} scoreNavVisible={scoreNavVisible} handleTabClick={handleTabClick}/> }
      {showGameTab && <GameTab scoreNavVisible={scoreNavVisible} handleTabClick={handleTabClick} />}
      {showScoreTab && <ScoreTab handleTabClick={handleTabClick} />}
    </>
  );
}

export default App;