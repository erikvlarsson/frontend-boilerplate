import React, { useContext } from "react";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../Contexts/AuthContext";

export default function Footer() {
  const { logout } = useContext(AuthContext);

  return (
    <nav id="bottomNav">
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="navButton">
          <AiOutlineUser />
        </div>
      </div>
      {/* <input type="text" /> */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div className="navButton" onClick={() => logout()}>
          <AiOutlineLogout />
        </div>
      </div>
    </nav>
  );
}
