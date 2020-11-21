import { useEffect, useState, useContext } from "react";
import UserService from "./Shared/UserService";
import Routes from "./Routes";
import Spinner from "./Components/Spinner/Spinner";
import { AuthContext } from "./Contexts/AuthContext";

function AppMain() {
  const { auth, setAuth } = useContext(AuthContext);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded) {
      const userService = new UserService();
      userService.renewTokens().then((result) => {
        alert(JSON.stringify(result));
        setHasLoaded(true);
      });
    }
  }, [hasLoaded, setAuth]);

  if (!hasLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <Routes auth={auth} />
        <div
          id="alert"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        />
      </div>
    );
  }
}

export default AppMain;
