import React, { useState } from "react";
import UserService from "../../Shared/UserService";
import Status from "../../Components/Status";

export default function Login({ goToSignup, setAuth }) {
  const userService = new UserService();
  const [statusCode, setStatusCode] = useState(200);
  const [userData, setUserData] = useState({
    email: localStorage.email,
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!(userData.password.length > 0 && userData.email.length > 0)) {
      alert("Please enter both fields.");
    } else {
      await userService.login(userData).then((responseCode) => {
        // setStatusCode(responseCode);
        if (responseCode === 200) {
          setAuth(true);
          alert("Welcome!");
        } else if (responseCode === 401) {
          alert("Wrong password!");
        } else if (responseCode === 403) {
          alert("No user with that email!");
        } else {
          alert("FUCK YOU!");
        }
      });
    }
  };

  const handleWrite = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const className = "margin-5 padding-10";

  return (
    <div>
      <h1>Log in</h1>
      <Status statusCode={statusCode} />

      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={userData.email}
          autoComplete="off"
          className={className}
          onChange={handleWrite}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          className={className}
          onChange={handleWrite}
        />
        <button type="submit" className={className + " submitButton"}>
          Log in
        </button>
        <button onClick={goToSignup} className={className}>
          Sign up
        </button>
      </form>
    </div>
  );
}
