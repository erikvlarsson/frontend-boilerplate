import React, { useState } from "react";
import Data from "../../Components/Data";
import UserService from "../../Shared/UserService";

export default function Signup({ goToLogin, setAuth }) {
  const userService = new UserService();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = (event) => {
    event.preventDefault();
    userService.register(userData).then((registered) => {
      if (registered) {
        localStorage.email = userData.email;
        goToLogin();
        // setAuth(true);
      }
    });
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
      <h1>Sign Up</h1>
      <Data data={userData} />
      <form method="POST" onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="name"
          autoComplete="off"
          className={className}
          onChange={handleWrite}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          autoComplete="off"
          className={className}
          onChange={handleWrite}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          autoComplete="off"
          className={className}
          onChange={handleWrite}
        />
        <button type="submit" className={className + " submitButton"}>
          Sign Up
        </button>
        <button className={className} onClick={goToLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
