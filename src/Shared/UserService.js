import Connection from "./Api";

class UserService {
  async register(user) {
    let res = null;
    await Connection.post("/register", user).then((response) => {
      res = response;
    });
    return res;
  }

  async getUsers() {
    let res = null;
    await Connection.get("/users").then((response) => {
      res = response;
    });
    return res;
  }
}

export default UserService;
