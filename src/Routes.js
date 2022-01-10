import React from "react";
import { Switch, Route } from "react-router-dom";
import Game from "./core/componets/Game";
import Home from "./core/Home";
import JoinMatch from "./core/JoinMatch";
import StartMatch from "./core/StartMatch";
import ComputerBoard from "./core/componets/ComputerBoard";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" exact component={JoinMatch} />
        <Route path="/start" exact component={StartMatch} />
        <Route path="/gameSession" exact component={Game} />
        <Route path="/gameSessionC" exact component={ComputerBoard} />
      </Switch>
    </>
  );
};

export default Routes;
