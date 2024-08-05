import "./GameOver.css";

export default function GameOver({ winner, onSelect, playerName }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{playerName[winner]} won</p>}
      {!winner && <p>Draw</p>}
      <p>
        <button onClick={onSelect}>Rematch!</button>
      </p>
    </div>
  );
}
