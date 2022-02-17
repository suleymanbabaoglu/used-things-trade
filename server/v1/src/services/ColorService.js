const BaseService = require("./BaseService");
const ColorModel = require("../models/Colors");
class ColorService extends BaseService {
  constructor() {
    super(ColorModel);
  }
}
module.exports = new ColorService();
