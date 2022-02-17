const BaseController = require("./BaseController");
const CountryService = require("../services/CountryService");

class CountryController extends BaseController {
  constructor() {
    super(CountryService);
  }
}

module.exports = new CountryController();
