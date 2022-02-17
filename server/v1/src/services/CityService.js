const BaseService = require("./BaseService");
const CityModel = require("../models/Cities");
class CityService extends BaseService {
  constructor() {
    super(CityModel);
  }
}
module.exports = new CityService();
