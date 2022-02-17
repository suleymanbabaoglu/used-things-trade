const BaseController = require("./BaseController");
const VehicleTypeService = require("../services/VehicleTypeService");

class VehicleTypeController extends BaseController {
  constructor() {
    super(VehicleTypeService);
  }
}

module.exports = new VehicleTypeController();
