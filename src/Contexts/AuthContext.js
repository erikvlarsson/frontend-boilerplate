import React, { Component, createContext } from "react";
export const AuthContext = createContext(null);

export class AuthContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }
  setAuth = (bool) => {
    this.setState({
      auth: bool,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          auth: this.state.auth,
          setAuth: this.setAuth,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
