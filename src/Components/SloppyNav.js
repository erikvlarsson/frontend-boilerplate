import React, { useState } from "react";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink as Link } from "react-router-dom";
import MenuList from "./MenuList";

export default function SloppyNav() {
  const [menuListOpen, setMenuListOpen] = useState(false);
  const toggleMenuList = () => {
    setMenuListOpen(!menuListOpen);
  };
  return (
    <>
      <header>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            className="navButton"
            to="/"
            exact
            activeClassName={"navButton-active"}
          >
            <AiOutlineHome />
          </Link>
          <Link
            className="navButton"
            to="/profile"
            activeClassName={"navButton-active"}
          >
            <AiOutlineUser />
          </Link>
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
          <div className="navButton" onClick={toggleMenuList}>
            <BsThreeDotsVertical />
          </div>
        </div>
      </header>
      <MenuList visible={menuListOpen} />
    </>
  );
}
