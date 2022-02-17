const BaseService = require("./BaseService");
const BrandModel = require("../models/Brands");
class BrandService extends BaseService {
  constructor() {
    super(BrandModel);
  }
}
module.exports = new BrandService();
