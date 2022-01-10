import React from "react";
import { Link } from "react-router-dom";
import Game from "./componets/Game";

const JoinMatch = () => {
  const startMatch = () => {};
  return (
    <div>
      <h1>Join Match</h1>
      <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          Large
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>
      <Link to="gameSession">
        <button type="button" class="btn btn-primary btn-lg">
          Enter in Match
        </button>
      </Link>
    </div>
  );
};

export default JoinMatch;
