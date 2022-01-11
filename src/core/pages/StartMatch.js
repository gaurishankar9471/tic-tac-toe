import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { createRoom, joinRoom } from "../functions/index";
import { GameBoard } from "../lib/game";
import { GlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";

const StartMatch = () => {
  const history = useHistory();
  const { setUsername } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const onCreateRoomClick = async () => {
    let name = prompt("What is your name?") || "";
    if (name.trim() === "") return;

    let gameObj = JSON.parse(JSON.stringify(new GameBoard(name, null)));
    gameObj._turn = name;
    setLoading(true);
    try {
      let { roomID } = await createRoom({
        ...gameObj,
        PLAYER_ONE: name,
      });
      await setUsername(name);
      history.push(`/game/${roomID}`);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={onCreateRoomClick}
        >
          VS Player
        </button>
      </div>

      <div>
        <Link to="/gameSessionC">
          <button type="button" class="btn btn-secondary btn-lg">
            VS Computer
          </button>
        </Link>
      </div>
      <Loader visible={loading} />
    </div>
  );
};

export default StartMatch;
