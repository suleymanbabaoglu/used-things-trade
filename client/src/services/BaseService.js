import { appAxios } from "../utils/appAxios";

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
  getById() {}
  list() {
    return this.request(this.Route, "GET");
  }
  create() {}
  update() {}
  delete() {}
}

export default BaseService;
