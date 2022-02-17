const BaseController = require("./BaseController");
const BrandService = require("../services/BrandService");

class BrandController extends BaseController {
  constructor() {
    super(BrandService);
  }
}

module.exports = new BrandController();
