import { useState } from "react";
import "./Board.css";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function Board() {
  const [board, setBoard] = useState(initialBoard);
  const [symbol, setSymbol] = useState(null);

  function handleBoard(rowIndex, colIndex) {
    setBoard((prevboard) => {
      const updatedBoard = [...prevboard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
      return updatedBoard;
    });

    setSymbol(() => (symbol === "X" ? "O" : "X"));
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol}
                  onClick={() => handleBoard(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
