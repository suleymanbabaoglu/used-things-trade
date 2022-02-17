const BaseService = require("./BaseService");
const FuelModel = require("../models/Fuels");
class FuelService extends BaseService {
  constructor() {
    super(FuelModel);
  }
}
module.exports = new FuelService();
