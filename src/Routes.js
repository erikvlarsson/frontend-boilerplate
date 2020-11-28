import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import Spinner from "./Components/Loading/Spinner";
import Nav from "./Components/Nav";
// PAGES
import Home from "./Pages/Home";
import ErrorPage from "./Pages/404";
import Profile from "./Pages/Profile";
import Blog from "./Pages/Blog/Blog";

export default function Routes({ auth, hasLoaded }) {
  if (!auth && hasLoaded) {
    return <Authentication />;
  } else if (auth && hasLoaded) {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/blog" component={Blog} />
          <Route path="/" exact component={Home} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <Spinner />;
  }
}
