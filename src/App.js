import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" style={{ textAlign: "center" }}>
          <h2>Welcome</h2>
          <h3>Tic Tac Toe Game</h3>
          <Routes />
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
