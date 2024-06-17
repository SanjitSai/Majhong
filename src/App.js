import React, { useState } from 'react';
import WelcomeScreen from './Welcomescreen';
import GameBoard from './GameBoard';
import SuccessScreen from './SuccessScreen';

const App = () => {
  const [name, setName] = useState(localStorage.getItem('userName') || '');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  const handleGameEnd = (finalScore, timeTaken) => {
    setScore(finalScore);
    setTime(timeTaken);
    setGameOver(true);
  };

  const handlePlayAgain = () => {
    setGameOver(false);
    setScore(0);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="app">
      {!name && !gameOver && <WelcomeScreen setName={setName} />}
      {name && !gameOver && (
        <GameBoard name={name} onGameEnd={handleGameEnd} />
      )}
      {gameOver && (
        <SuccessScreen
          score={score}
          time={formatTime(time)}
          name={name}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default App;
