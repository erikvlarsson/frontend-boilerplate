import { useEffect, useState } from "react";
import Authentication from "./Pages/Authentication/Authentication";
import Routes from "./Routes";
import "./App.css";
import "./Styles/Buttons.css";

function App() {
  const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //   return () => {};
  // }, []);

  return (
    <div className="App">
      {auth ? <Routes /> : <Authentication setAuth={setAuth} />}
    </div>
  );
}

export default App;
