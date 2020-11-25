
import React from 'react';
import Square from './Square';

const style = {
  border: '5px solid #013a5b',
  borderRadius: '15px',
  width: '260px',
  height: '260px',
  margin: 'auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;