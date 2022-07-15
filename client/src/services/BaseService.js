import { appAxios } from "../utils/appAxios";
import store from "../store";

class BaseService {
  constructor(route) {
    this.Route = route;
  }

  request(url, method, data = {}) {
    try {
      return appAxios({
        url,
        method,
        data,
        headers: { Authorization: `Bearer ${store.getters.getAccess}` },
      }).then((response) => {
        return response.data;
      });
    } catch (e) {
      /*if (e.response !== undefined && e.response.status === 401) {
        return (await new AccountService().loginByRefreshToken())
          ? ReturnConstraints.REFRESH
          : null;
      } else throw ErrorConstraints.NETWORK_ERROR;*/
    }
  }
  findOne(id) {
    return this.request(this.Route + `/${id}`, "GET");
  }
  list() {
    return this.request(this.Route, "GET");
  }
  create(data) {
    return this.request(this.Route, "POST", data);
  }
  update(id, data) {
    return this.request(this.Route + `/${id}`, "PATCH", data);
  }
  delete(id) {
    return this.request(this.Route + `/${id}`, "DELETE");
  }
}

export default BaseService;
