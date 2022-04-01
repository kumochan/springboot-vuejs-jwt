import axios from "axios";

const VUE_APP_BASE_DOMAIN = process.env.VUE_APP_BASE_DOMAIN;
const VUE_APP_PORT = process.env.VUE_APP_PORT;
const API_URL = VUE_APP_BASE_DOMAIN + VUE_APP_PORT + "/api/auth/";
// const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(user) {
    console.log(API_URL);
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    console.log(user);
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
      // role: user.role
    });
  }
}

export default new AuthService();
