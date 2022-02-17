const BaseService = require("./BaseService");
const UserModel = require("../models/Users");
class UserService extends BaseService {
  constructor() {
    super(UserModel);
  }
}

module.exports = new UserService();
