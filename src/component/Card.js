import { useState } from "react";
import "../style/Card.scss"
const Card = ({ onGameOutcome }) => { 
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [currentPlayer, setCurrentPlayer] = useState('X'); 
  const [winner, setWinner] = useState(null); 

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]              
  ];

  const handleCellClick = (index) => {
    if (board[index] || winner) return; 

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      setWinner(currentPlayer);
      onGameOutcome(currentPlayer); 
    } else if (newBoard.every(cell => cell !== null)) {
      setWinner('draw');
      onGameOutcome('draw');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board, player) => {
    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === player)
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    onGameOutcome(null); 
  };

  return (
    <div className="board">
      {board.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleCellClick(index)}>
          {cell}
        </div>
      ))}
      {winner && (
        <div className="winner">{winner === 'draw' ? 'It\'s a draw!' : `Player ${winner} wins!`}</div>
      )}
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default Card;
