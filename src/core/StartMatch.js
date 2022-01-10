import React from "react";
import { Link } from "react-router-dom";

const StartMatch = () => {
  return (
    <div>
      <div>
        <Link to="/gameSession">
          <button type="button" class="btn btn-primary btn-lg">
            VS Player
          </button>
        </Link>
      </div>

      <div>
        <Link to="/gameSessionC">
          <button type="button" class="btn btn-secondary btn-lg">
            VS Computer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartMatch;
