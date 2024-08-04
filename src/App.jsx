import { useState } from "react";
import Player from "./assets/components/Player/Player";
import Board from "./assets/components/Board/Board";
import Lottie from "lottie-react";
import animation from "../public/Animation - 1722779653872.json";
import Log from "./assets/components/Log/Log";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [board, setBoard] = useState(initialBoard);
  const [turns, setTurns] = useState([]);

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
      console.log(updatedTurn);
      return updatedTurn;
    });
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
              name="Player 1"
              symbol="X"
            />
            <Lottie className="lottie" animationData={animation} />
            <Player
              isActive={activePlayer === "O"}
              name="Player 2"
              symbol="O"
            />
          </ol>
          <div className="board">
            <Board onSelect={handleBoard} board={board} />
          </div>
        </div>
        <div className="log">
          <Log turns={turns} />
        </div>
      </div>
    </div>
  );
}

export default App;
