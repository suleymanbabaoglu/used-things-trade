const BaseService = require("./BaseService");
const Models = require("../models/Models");
class ModelService extends BaseService {
  constructor() {
    super(Models);
  }

  findOne(where) {
    return this.BaseModel?.findOne(where).populate({
      path: "Brand",
      select: "Name",
    });
  }
  list(where) {
    return this.BaseModel?.find(where || {}).populate({
      path: "Brand",
      select: "Name",
    });
  }

  update(id, data) {
    return this.BaseModel?.findByIdAndUpdate(id, data, { new: true }).populate({
      path: "Brand",
      select: "Name",
    });
  }
}
module.exports = new ModelService();
