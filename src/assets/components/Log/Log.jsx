import "./log.css";

export default function Log({ turns, playerName }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.row}${turn.col}`}>
          {playerName[turn.player]} selected {turn.row} , {turn.col}
        </li>
      ))}
    </ol>
  );
}
