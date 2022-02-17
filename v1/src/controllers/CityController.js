const BaseController = require("./BaseController");
const CityService = require("../services/CityService");
class CityController extends BaseController {
  constructor() {
    super(CityService);
  }
}

module.exports = new CityController();
