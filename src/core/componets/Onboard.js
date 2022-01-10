import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Onboard = () => {
  return (
    <div>
      <div className="">
        <Link to="/start">
          <button type="button" className="btn">
            Start New Match
          </button>
        </Link>
      </div>

      <div>
        <Link to="/join">
          <button type="button" className="btn">
            Join Match
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Onboard;
