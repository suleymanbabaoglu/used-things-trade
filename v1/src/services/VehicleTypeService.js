const BaseService = require("./BaseService");
const VehicleTypeModel = require("../models/VehicleTypes");
class VehicleTypeService extends BaseService {
  constructor() {
    super(VehicleTypeModel);
  }
}
module.exports = new VehicleTypeService();
