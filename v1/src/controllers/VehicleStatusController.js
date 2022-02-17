const BaseController = require("./BaseController");
const VehicleStatusService = require("../services/VehicleStatusService");

class VehicleStatusController extends BaseController {
  constructor() {
    super(VehicleStatusService);
  }
}

module.exports = new VehicleStatusController();
