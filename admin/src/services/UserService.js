import BaseService from "./BaseService";
import { Constraints } from "../helpers";
import store from "../store";
import router from "../router";
import { setObjectLocalStorage } from "../helpers/Functions";
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
        let authObject = {
          is_authenticated: true,
          access_token: userResponse.tokens.access_token,
          refresh_token: userResponse.tokens.refresh_token,
        };
        setObjectLocalStorage("auth", authObject);
        store.dispatch("setAuth", authObject);
      if(store.getters.isAuth) router.push("/");
      }
    });
  }

  logout(data) {
    this.request(Constraints.Routes.User + "/logout", "POST", {
      access_token: data,
    }).then((userResponse) => {
      if (userResponse) {
        let authObject = {
          is_authenticated: false,
          access_token: "",
          refresh_token: "",
        };
        setObjectLocalStorage("auth", authObject);
        store.dispatch("setAuth", authObject);
        router.push("/login");
      }
    });
  }
}

export default new UserService();
