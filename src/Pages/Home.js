import React, { useEffect, useState } from "react";
import "../Shared/UserService";
import StateViewer from "../Components/StateViewer";
import Api from "../Shared/Api";
import UserService from "../Shared/UserService";

export default function Home() {
  const [users, setUsers] = useState(null);
  const userService = new UserService();

  useEffect(() => {
    userService.getUsers().then((response) => {
      setUsers(response.data);
    });
    return () => {};
  }, []);

  return (
    <div>
      <h1>Home.js</h1>
      {users ? <StateViewer state={users} /> : null}
    </div>
  );
}
