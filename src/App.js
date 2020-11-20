import { useEffect, useState } from "react";
import UserService from "./Shared/UserService";
import Authentication from "./Pages/Authentication/Authentication";
import Status from "./Components/Status";
import Routes from "./Routes";
import "./App.css";
import "./Styles/Buttons.css";

function App() {
  const [auth, setAuth] = useState(false);
  const [status, setStatus] = useState(false);
  const userService = new UserService();

  useEffect(() => {
    userService.authorize().then((statusCode) => {
      alert(statusCode);
      setStatus(statusCode);
      // setAuth(statusCode === 200);
    });
    return () => {};
  }, []);

  return (
    <div className="App">
      {auth ? <Routes /> : <Authentication setAuth={setAuth} />}
      <Status statusCode={status} />
    </div>
  );
}

export default App;
