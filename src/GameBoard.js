import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import './GameBoard.css';

const generateTiles = () => {
  const images = [
    "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
    "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
    "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
    "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
    "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
    "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
    "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
    "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
    "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
    "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
    "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png"
  ];
  const doubleImages = [...images, ...images];
  return doubleImages.sort(() => Math.random() - 0.5);
};

const GameBoard = ({ name, onGameEnd }) => {
  const [tiles, setTiles] = useState(generateTiles());
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    if (matchedTiles.length === tiles.length) {
      const endTime = Date.now();
      onGameEnd(score, endTime - startTime);
    }
  }, [matchedTiles, tiles, score, startTime, onGameEnd]);

  const handleTileClick = (index) => {
    if (flippedTiles.length === 2 || matchedTiles.includes(index)) return;

    const newFlippedTiles = [...flippedTiles, index];
    setFlippedTiles(newFlippedTiles);

    if (newFlippedTiles.length === 2) {
      const [first, second] = newFlippedTiles;
      if (tiles[first] === tiles[second]) {
        setMatchedTiles([...matchedTiles, first, second]);
        setScore(score + 1);
      } else {
        setScore(score - 1);
      }

      setTimeout(() => setFlippedTiles([]), 1000);
    }
  };

  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);

  return (
    <div className="game-container">
      <h1 className="title">Mahajong Game</h1>
      <div className="game-info">
        <div className="score">Score: <strong>{score}</strong></div>
        <div className="time">Time: <strong>{elapsedTime}</strong></div>
        <div className="welcome">Welcome <strong>{name}</strong> 👋👏</div>
      </div>
      <div className="game-board">
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            index={index}
            tile={tile}
            isFlipped={flippedTiles.includes(index) || matchedTiles.includes(index)}
            onClick={handleTileClick}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
