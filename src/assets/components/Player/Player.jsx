import { useState } from "react";
import "./Player.css";

export default function Player({ name, symbol, isActive, onChange }) {
  const [isEdit, setIsEdit] = useState(false);
  const [player, setPlayer] = useState(name);

  function handlePlayer(e) {
    setPlayer(e.target.value);
  }

  function handleEdit() {
    setIsEdit(() => !isEdit);
    onChange(symbol, player);
  }
  return (
    <li className={isActive ? "active" : null}>
      <div className="identification flex">
        {isEdit ? (
          <input type="text" value={player} onChange={handlePlayer} />
        ) : (
          <p className="player-name">{name}</p>
        )}
        <p className="player-symbol">{symbol}</p>
      </div>
      <button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
