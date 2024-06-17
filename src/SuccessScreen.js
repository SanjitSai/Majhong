import React from 'react';
import './SuccessScreen.css';

const SuccessScreen = ({ score, time, name, onPlayAgain }) => {
  return (
    <div className="success-screen">
      <h1 className="title">Congratulations, {name}!</h1>
      <div className="score-time">
        <p>Your final score is: <strong>{score}</strong></p>
        <p>Time taken: <strong>{time}</strong></p>
      </div>
      <button className="play-again-button" onClick={onPlayAgain}>Play Again</button>
    </div>
  );
};

export default SuccessScreen;
