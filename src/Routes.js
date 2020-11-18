import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Another from "./Pages/Another";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/a" component={Another} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
