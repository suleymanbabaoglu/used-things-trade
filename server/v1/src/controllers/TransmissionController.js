const BaseController = require("./BaseController");
const TransmissionService = require("../services/TransmissionService");

class TransmissionController extends BaseController {
  constructor() {
    super(TransmissionService);
  }
}

module.exports = new TransmissionController();
