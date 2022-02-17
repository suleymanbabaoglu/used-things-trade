const BaseService = require("./BaseService");
const Models = require("../models/Models");
class ModelService extends BaseService {
  constructor() {
    super(Models);
  }
}
module.exports = new ModelService();
