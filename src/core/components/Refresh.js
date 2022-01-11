import React from "react";

const style = {
  width: "250px",
  margin: "0 auto",
  display: "grid",
  fontSize: "40px",
  fontWeight: "800",
};

const Refresh = (props) => (
  <button className="btn" name={"btn"} onClick={props.onClick}>
    {props.value}
  </button>
);

export default Refresh;
