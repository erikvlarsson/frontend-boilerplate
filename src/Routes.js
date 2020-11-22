import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Another from "./Pages/Another";
import Spinner from "./Components/Loading/Spinner";
import Authentication from "./Pages/Authentication/Authentication";

export default function Routes({ auth, hasLoaded }) {
  if (!auth && hasLoaded) {
    return <Authentication />;
  } else if (auth && hasLoaded) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/a" component={Another} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <Spinner />;
  }
}
