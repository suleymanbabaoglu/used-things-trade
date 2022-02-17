const BaseService = require("./BaseService");
const CountryModel = require("../models/Countries");
class CountryService extends BaseService {
  constructor() {
    super(CountryModel);
  }
}

module.exports = new CountryService();
