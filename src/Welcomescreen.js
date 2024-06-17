import React, { useState } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ setName }) => {
  const [name, setNameInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', name);
    setName(name);
  };

  return (
    <div className="welcome-screen">
      <h1 className="title">React Tiles</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Enter Your Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setNameInput(e.target.value)}
            required
            className="name-input"
          />
          <button type="submit" className="play-button">Play</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;
