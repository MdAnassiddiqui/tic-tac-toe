import React, { useState, useEffect } from 'react';
import '../style/ScoreCard.scss';

const ScoreCard = ({ winner }) => {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);

  useEffect(() => {
    if (winner === 'X') {
      setPlayer1(prevScore => prevScore + 1);
    } else if (winner === 'O') {
      setPlayer2(prevScore => prevScore + 1);
    }
  }, [winner]);
  

  return (
    <div className="scoreboard">
      <div className='score player1'>Player 1 Score: {player1}</div>
      <div className='score player2'>Player 2 Score: {player2}</div>
    </div>
  );
};

export default ScoreCard;
