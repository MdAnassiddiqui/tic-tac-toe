import React, { useState } from 'react';
import Card from './component/Card';
import ScoreCard from './component/ScoreCard';
import './style/App.scss'; 

const App = () => {
  const [winner, setWinner] = useState("");

  const handleGameOutcome = (result) => {
    setWinner(result); 
  };
  
  const resetWinner = () => {
    setWinner(""); 
  };
  console.log("Winner prop in parent component:", winner);
  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <ScoreCard winner={winner} />
      <Card onGameOutcome={handleGameOutcome} onGameRestart={resetWinner} />
    </div>
  );
};

export default App;
