const BaseService = require("./BaseService");
const Models = require("../models/Models");
class ModelService extends BaseService {
  constructor() {
    super(Models);
  }

  list(where) {
    return this.BaseModel?.find(where || {}).populate({
      path: "Brand",
      select: "Name",
    });
  }
}
module.exports = new ModelService();
