import { useEffect, useState, useContext } from "react";
import UserService from "./Shared/UserService";
import Routes from "./Routes";
import LoadingScreen from "./Components/Loading/LoadingScreen";
import { AuthContext } from "./Contexts/AuthContext";

function AppMain() {
  const { auth, setAuth } = useContext(AuthContext);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded) {
      const userService = new UserService();
      userService.getRefreshToken().then((auth) => {
        setAuth(auth).then(() => {
          if (auth) {
            setTimeout(() => setHasLoaded(true), 1500);
          } else {
            setHasLoaded(true);
          }
        });
      });
    }
  }, [hasLoaded, setAuth, setHasLoaded]);

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
