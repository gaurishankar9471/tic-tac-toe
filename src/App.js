import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./core/scss/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" style={{ textAlign: "center" }}>
          <h2>Tic Tac Toe Game</h2>
          <Routes />
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
