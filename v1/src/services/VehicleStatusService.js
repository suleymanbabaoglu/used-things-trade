const BaseService = require("./BaseService");
const VehicleStatusModel = require("../models/VehicleStatuses");
class VehicleStatusService extends BaseService {
  constructor() {
    super(VehicleStatusModel);
  }
}
module.exports = new VehicleStatusService();
