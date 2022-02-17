const BaseController = require("./BaseController");
const ColorService = require("../services/ColorService");

class ColorController extends BaseController {
  constructor() {
    super(ColorService);
  }
}

module.exports = new ColorController();
