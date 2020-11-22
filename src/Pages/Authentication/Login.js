import React, { useState, useContext } from "react";
import UserService from "../../Shared/UserService";
import toast from "../../Components/Alert/Toast";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Login({ goToSignup }) {
  const { setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const userService = new UserService();
  const [userData, setUserData] = useState({
    email: localStorage.email,
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!(userData.password.length > 0 && userData.email.length > 0)) {
      toast(400, "Please enter both fields.");
    } else {
      await userService.login(userData).then((response) => {
        if (response === 200) {
          setAuth(true);
          toast(200, response);
        } else if (response === 401) {
          toast(401, "Wrong password.");
        } else if (response === 403) {
          toast(403, "No user with that email.");
        } else {
          toast(400, "Unkown error.");
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
        <Spinner />
      ) : (
        <div>
          <h1>Log in</h1>
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
            <button type="submit" className={className + " purpleButton"}>
              Log in
            </button>
            <div className={className} style={{ textAlign: "center" }}>
              Forgot your password?
            </div>
            <hr style={{ width: "100%" }} />
            <button
              onClick={goToSignup}
              style={{ width: "70%", alignSelf: "center" }}
              className={className + " greenButton"}
            >
              Sign up
            </button>
          </form>
        </div>
      )}
    </>
  );
}
