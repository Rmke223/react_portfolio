import React from 'react';

const styles = {
  background: 'linear-gradient(135deg, #4169E1, #ff8a95)',
  border: '5px solid #11D3BC',
  fontSize: '50px',
  fontWeight: '800',
  color: '#013a5b',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ value, onClick }) => (
  <button style={styles} onClick={onClick}>
    {value}
  </button>
);

export default Square;