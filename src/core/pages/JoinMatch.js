import React from "react";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";

import { createRoom, joinRoom } from "../functions/index";
import { GameBoard } from "../lib/game";
import { GlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";
const JoinMatch = () => {
  const history = useHistory();
  const { setUsername } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const onJoinRoomClick = async () => {
    let roomID = prompt("Please enter Room ID") || "";
    let name = prompt("What is your name?") || "";

    if (roomID.trim() === "" || name.trim() === "") return;

    setLoading(true);
    try {
      let response = await joinRoom(roomID, name);
      await setUsername(name);
      history.push(`/game/${response.roomID}`);
    } catch (error) {
      console.log(error);
      alert("No such room! Please eneter a valid Room ID");
    }
    setLoading(false);
  };

  const startMatch = () => {};
  return (
    <div>
      <h1>Join Match</h1>
      <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          Match ID
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>

      <button
        type="button"
        class="btn btn-primary btn-lg"
        onClick={onJoinRoomClick}
      >
        Enter in Match
      </button>
      <Loader visible={loading} />
    </div>
  );
};

export default JoinMatch;
