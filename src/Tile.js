import React from 'react';

const Tile = ({ index, tile, isFlipped, onClick }) => (
  <div className={`tile ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(index)}>
    {isFlipped ? <img src={tile} alt="tile" /> : <div className="back" />}
  </div>
);

export default Tile;
