const BaseController = require("./BaseController");
const StateService = require("../services/StateService");

class StateController extends BaseController {
  constructor() {
    super(StateService);
  }
}

module.exports = new StateController();
