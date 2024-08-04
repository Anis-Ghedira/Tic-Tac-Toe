import { useState } from "react";
import "./Player.css";

export default function Player({ name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handlePlayerName(e) {
    setPlayerName(e.target.value);
  }

  function handleEdit() {
    setIsEdit(() => !isEdit);
  }
  return (
    <li>
      <div className="identification flex">
        {isEdit ? (
          <input type="text" value={playerName} onChange={handlePlayerName} />
        ) : (
          <p className="player-name">{playerName}</p>
        )}
        <p className="player-symbol">{symbol}</p>
      </div>
      <button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</button>
      {/* <span className="player">
        {isEdit ? (
           />
        ) : (
          <span ç>{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
       */}
    </li>
  );
}
