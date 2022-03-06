import BaseService from "./BaseService";
import { Constraints } from "../helpers";
class UserService extends BaseService {
  constructor() {
    super(Constraints.Routes.User);
  }
}

export default new UserService();
