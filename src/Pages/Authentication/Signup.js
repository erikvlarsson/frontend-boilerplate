import React, { useState, useContext, useEffect } from "react";
import LoadingScreen from "../../Components/Loading/LoadingScreen";
import UserService from "../../Shared/UserService";
import { toast } from "../../Components/Alert/Toast";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Signup({ goToLogin }) {
  const { setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    return () => {};
  }, []);

  const userService = new UserService();
  const handleSignup = (event) => {
    event.preventDefault();
    if (
      !(
        userData.password.length > 0 &&
        userData.email.length > 0 &&
        userData.password.length > 0
      )
    ) {
      toast(400, "Please enter all fields.");
    } else {
      userService.signup(userData).then((registered) => {
        if (registered) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setAuth(true);
          }, 1500);
        }
      });
    }
    setLoading(false);
  };

  const handleWrite = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const className = "margin-5 padding-10";

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <h1>Sign Up</h1>
          <form method="POST" onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              autoComplete="off"
              className={className}
              onChange={handleWrite}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
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
            <button type="submit" className={className + " greenButton"}>
              Sign Up
            </button>
            <div
              className={className}
              style={{ textAlign: "center" }}
              onClick={goToLogin}
            >
              Already a member?{" "}
              <span
                style={{
                  padding: 5,
                  cursor: "pointer",
                  color: "rgb(93, 145, 255)",
                }}
              >
                Login
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
