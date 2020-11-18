import React, { useState } from "react";
import Json from "../../Components/Json";
const className = "margin-5 padding-10";

export default function Signup({ goToLogin, register }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "e",
    password: "",
  });
  const [response, setResponse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    register(userData);
  };

  const handleWrite = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Json data={userData} />
      <form method="POST" onSubmit={handleSubmit}>
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
