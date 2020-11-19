import Connection from "./Api";

class UserService {
  async register(userData) {
    let res = false;
    await Connection.post("/register", userData).then((response) => {
      if (response.status === 201) {
        res = true;
      }
    });
    return res;
  }

  async authenticate(userData) {
    let res = null;
    await Connection.post("/authenticate", userData).then((response) => {
      // evaluates to true if user authenticated
      res = response.data;
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
