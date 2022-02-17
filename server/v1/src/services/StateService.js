const BaseService = require("./BaseService");
const StateModel = require("../models/States");
class StateService extends BaseService {
  constructor() {
    super(StateModel);
  }
}
module.exports = new StateService();
