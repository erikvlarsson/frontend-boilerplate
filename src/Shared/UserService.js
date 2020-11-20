import Api from "./Api";

class UserService {
  async register(userData) {
    let registered = false;
    await Api.post("/register", userData).then((response) => {
      if (response.status === 201) {
        registered = true;
      }
    });
    return registered;
  }

  async authorize() {
    let authorized = null;
    await Api.post(
      "/authorize",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.access_token, //the token is a variable which holds the token
        },
      }
    ).then((response) => {
      authorized = response.status;
    });
    return authorized;
  }

  async login(userData) {
    let authorized = null;
    await Api.post("/login", userData)
      .then((response) => {
        if (response.status === 200) {
          authorized = response.status;
          localStorage.access_token = response.data.access_token;
          localStorage.email = userData.email;
        }
      })
      .catch((error) => {
        authorized = error.response.status;
      });
    return authorized;
  }

  async getUsers() {
    let res = null;
    await Api.get("/users").then((response) => {
      res = response;
    });
    return res;
  }
}

export default UserService;
