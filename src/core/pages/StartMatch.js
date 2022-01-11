import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { createRoom } from "../functions/index";
import { GameBoard } from "../lib/game";
import { GlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";

const StartMatch = () => {
  const history = useHistory();
  const { setUsername } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [inputName, setInputName] = useState("");

  const onCreateRoomClick = async () => {
    if (inputName === "") {
      alert("Name can not be empty.");
      return;
    }
    let name = inputName || "";
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
        <div class="input-group input-group-lg mt-3">
          <span class="input-group-text" id="inputGroup-sizing-lg">
            Enter Name
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>

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
          <button type="button" class="btn btn-secondary btn-lg mt-5">
            VS Computer
          </button>
        </Link>
      </div>
      <Loader visible={loading} />
    </div>
  );
};

export default StartMatch;
