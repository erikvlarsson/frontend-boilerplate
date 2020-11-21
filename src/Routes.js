import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Another from "./Pages/Another";
import Authentication from "./Pages/Authentication/Authentication";

export default function Routes({ auth }) {
  if (!auth) {
    return <Authentication />;
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/a" component={Another} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
