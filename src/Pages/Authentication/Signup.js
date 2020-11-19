import React, { useState } from "react";
import StateViewer from "../../Components/StateViewer";
import UserService from "../../Shared/UserService";

export default function Signup({ goToLogin }) {
  const userService = new UserService();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = (event) => {
    event.preventDefault();
    userService.register(userData).then((response) => {
      //response will be either true or false (see userService.register)
      if (response) {
        alert("SUCCESSFUL REGISTRATION.");
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
      <StateViewer state={userData} />
      <form method="POST" onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="name"
          className={className}
          onChange={handleWrite}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          className={className}
          onChange={handleWrite}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
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
