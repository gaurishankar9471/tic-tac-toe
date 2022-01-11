import React from "react";

const style = {
  width: "300px",
  margin: "0 auto",
  display: "grid",
  fontSize: "40px",
  fontWeight: "800",
  textAlign: "center",
};

const Message = (props) => (
  <h4 name={"msg"} style={style}>
    {props.value}
  </h4>
);

export default Message;
