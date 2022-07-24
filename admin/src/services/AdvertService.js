import BaseService from "./BaseService";
import { Constraints } from "../helpers";
class AdvertService extends BaseService {
  constructor() {
    super(Constraints.Routes.Advert);
  }

  statusUpdate(id, data) {
    return this.request(this.Route + `/status/${id}`, "PATCH", data);
  }
}

export default new AdvertService();
