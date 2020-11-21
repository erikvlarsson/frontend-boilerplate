import Api from "./Api";

class UserService {
  async signup(userData) {
    let res = null;
    await Api.post("/signup", userData)
      .then((response) => {
        if (response.status === 201) {
          sessionStorage.accessToken = response.data.accessToken;
          localStorage.refreshToken = response.data.refreshToken;
          localStorage.email = userData.email;
          res = 201;
        }
      })
      .catch((error) => {
        res = error;
      });
    return res;
  }

  async login(userData) {
    let res = null;
    await Api.post("/login", userData)
      .then((response) => {
        if (response.status === 200) {
          res = 200;
          sessionStorage.accessToken = response.data.accessToken;
          localStorage.refreshToken = response.data.refreshToken;
          localStorage.email = userData.email;
        }
      })
      .catch((error) => {
        res = error.response.status;
      });
    return res;
  }

  async getRefreshToken() {
    let result = null;
    await Api.post(
      "/getRefreshToken",
      {},
      {
        headers: {
          refreshToken: "Bearer " + localStorage.refreshToken,
        },
      }
    )
      .then((response) => {
        if (response.status === 201) {
          result = 201;
          localStorage.accessToken = response.data.accessToken;
          localStorage.refreshToken = response.data.refreshToken;
        } else {
          result = response.status;
        }
      })
      .catch((error) => {
        result = error.response.status;
      });
    return result;
  }

  async getAccessToken() {
    let result = null;
    await Api.post(
      "/getAccessToken",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.refreshToken,
        },
      }
    )
      .then((response) => {
        if (response.status === 201) {
          result = 201;
          sessionStorage.accessToken = response.data.accessToken;
        }
      })
      .catch((error) => {
        result = error.response.status;
        console.log(error);
      });
    return result;
  }
}

export default UserService;
