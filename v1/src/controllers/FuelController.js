const BaseController = require("./BaseController");
const FuelService = require("../services/FuelService");

class FuelController extends BaseController {
  constructor() {
    super(FuelService);
  }
}

module.exports = new FuelController();
