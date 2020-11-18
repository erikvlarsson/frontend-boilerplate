import React, { useEffect, useState } from "react";
import UserService from "../../Shared/UserService";
import Login from "./Login";
import Signup from "./Signup";

export default function Authentication({ setAuth }) {
  const [isSignupMode, setSignupMode] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const userService = new UserService();

  const login = (user) => {
    setAuth(true);
  };

  if (isSignupMode) {
    return (
      <Signup
        goToLogin={() => setSignupMode(false)}
        register={userService.register}
      />
    );
  } else {
    return <Login goToSignup={() => setSignupMode(true)} login={login} />;
  }
}
