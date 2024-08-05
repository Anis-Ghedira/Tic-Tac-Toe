import { useState } from "react";
import Player from "./assets/components/Player/Player";
import Board from "./assets/components/Board/Board";
import Lottie from "lottie-react";
import animation from "../public/Animation - 1722779653872.json";
import Log from "./assets/components/Log/Log";
import GameOver from "./assets/components/GameOver/GameOver";
import { WinningCombinations } from "./assets/components/win";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [board, setBoard] = useState(initialBoard);
  const [turns, setTurns] = useState([]);
  const [playerName, setPlayerName] = useState({
    X: "player 1",
    O: "Player 2",
  });

  function handlePlayerName(a, b) {
    setPlayerName((prev) => {
      const name = { ...prev };
      name[a] = b;
      return name;
    });
  }

  function handleRematch() {
    setBoard(initialBoard);
    setTurns([]);
  }

  function handleBoard(rowIndex, colIndex) {
    setBoard((prevboard) => {
      const updatedBoard = [...prevboard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));

    setTurns((prevturn) => {
      const updatedTurn = [
        { row: rowIndex, col: colIndex, player: activePlayer },
        ...prevturn,
      ];
      return updatedTurn;
    });
  }

  let winner;
  for (const combination of WinningCombinations) {
    const firstSquare = board[combination[0].row][combination[0].column];
    const secondSquare = board[combination[1].row][combination[1].column];
    const thirdSquare = board[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      secondSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }

  let draw = false;
  if (!winner && turns.length > 8) {
    draw = true;
  }
  return (
    <div className="container">
      <div className="title flex">
        <div />
        <h1>TIC-TAC-TOE</h1>
        <button className="icon-moon-o" />
      </div>

      <div className="box flex">
        <div className="gameboard flex">
          <ol id="players">
            <Player
              isActive={activePlayer === "X"}
              name={playerName.X}
              symbol="X"
              onChange={handlePlayerName}
            />
            <Lottie className="lottie" animationData={animation} />
            <Player
              isActive={activePlayer === "O"}
              name={playerName.O}
              symbol="O"
              onChange={handlePlayerName}
            />
          </ol>
          {winner || draw ? (
            <GameOver
              playerName={playerName}
              winner={winner}
              onSelect={handleRematch}
            />
          ) : null}
          <div className="board">
            <Board onSelect={handleBoard} board={board} />
          </div>
        </div>
        <div className="log">
          <Log turns={turns} playerName={playerName} />
        </div>
      </div>
    </div>
  );
}

export default App;
