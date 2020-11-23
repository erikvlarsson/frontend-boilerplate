import React, { useState, useEffect, createContext } from "react";
import UserService from "../Shared/UserService";
export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const setAuth = async (bool) => {
    setAuthenticated(bool);
  };
  const logout = async () => {
    setAuth(false).then(() => {
      localStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");
    });
  };

  // Authentication when app launches
  useEffect(() => {
    if (!hasLoaded) {
      const userService = new UserService();
      userService
        .getRefreshToken()
        .then((auth) => {
          setAuth(auth).then(() => {
            if (auth) {
              setTimeout(() => setHasLoaded(true), 1500);
            } else {
              logout().then(() => {
                setHasLoaded(true);
              });
            }
          });
        })
        .catch(() => {
          logout().then(() => {
            setHasLoaded(true);
          });
        });
    }
  });

  return (
    <AuthContext.Provider
      value={{
        hasLoaded: hasLoaded,
        auth: authenticated,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
