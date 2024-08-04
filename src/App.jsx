import Player from "./assets/components/Player/Player";
import Board from "./assets/components/Board/Board";
import Lottie from "lottie-react";
import animation from "../public/Animation - 1722779653872.json";

function App() {
  return (
    <div className="container">
      <h1>TIC-TAC-TOE</h1>
      <div className="box flex">
        <div className="gameboard flex">
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Lottie className="lottie" animationData={animation} />
            <Player name="Player 2" symbol="O" />
          </ol>
          <div className="board">
            <Board />
          </div>
        </div>
        <div className="log">dddddddd</div>
      </div>
    </div>
  );
}

export default App;
