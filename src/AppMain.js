import { useEffect, useState, useContext } from "react";
import UserService from "./Shared/UserService";
import Routes from "./Routes";
import LoadingScreen from "./Components/Loading/LoadingScreen";
import { AuthContext } from "./Contexts/AuthContext";

function AppMain() {
  const { hasLoaded, auth } = useContext(AuthContext);

  if (!hasLoaded) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="App">
        <Routes auth={auth} hasLoaded={hasLoaded} />
        <div id="alert" />
      </div>
    );
  }
}

export default AppMain;
