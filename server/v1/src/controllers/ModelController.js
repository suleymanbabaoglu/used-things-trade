const BaseController = require("./BaseController");
const ModelService = require("../services/ModelService");

class ModelController extends BaseController {
  constructor() {
    super(ModelService);
  }
}

module.exports = new ModelController();
