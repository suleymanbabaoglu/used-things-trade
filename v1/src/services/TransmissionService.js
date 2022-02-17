const BaseService = require("./BaseService");
const TransmissionModel = require("../models/Transmissions");
class TransmissionService extends BaseService {
  constructor() {
    super(TransmissionModel);
  }
}
module.exports = new TransmissionService();
