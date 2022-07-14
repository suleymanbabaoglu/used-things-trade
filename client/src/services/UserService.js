import BaseService from "./BaseService";
import { Constraints } from "../helpers";
import store from "../store";
import router from "../router";
class UserService extends BaseService {
  constructor() {
    super(Constraints.Routes.User);
  }

  login(data) {
    this.request(Constraints.Routes.User + "/login", "POST", {
      email: data.email,
      password: data.password,
    }).then((userResponse) => {
      if (userResponse) {
        localStorage.setItem("is_authenticated", "true");
        localStorage.setItem("access_token", userResponse.tokens.access_token);
        localStorage.setItem(
          "refresh_token",
          userResponse.tokens.refresh_token
        );
        store.dispatch("setAuth", true).then(() => router.push("/"));
      }
    });
  }

  logout(data) {
    this.request(Constraints.Routes.User + "/logout", "POST", {
      access_token: data,
    }).then((userResponse) => {
      if (userResponse) {
        localStorage.setItem("is_authenticated", "false");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        store.dispatch("setAuth", false).then(() => router.push("/login"));
      }
    });
  }
}

export default new UserService();
