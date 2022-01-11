import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import JoinMatch from "./core/pages/JoinMatch";
import StartMatch from "./core/pages/StartMatch";
import ComputerBoard from "./core/components/ComputerBoard";
import Game from "./core/pages/game";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" exact component={JoinMatch} />
        <Route path="/start" exact component={StartMatch} />
        <Route path="/gameSessionC" exact component={ComputerBoard} />
        <Route component={Game} path="/game/:id" exact />
      </Switch>
    </>
  );
};

export default Routes;
