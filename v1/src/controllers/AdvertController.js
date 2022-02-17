const BaseController = require("./BaseController");
const AdvertService = require("../services/AdvertService");

class AdvertController extends BaseController {
  constructor() {
    super(AdvertService);
  }
}

module.exports = new AdvertController();
