const BaseService = require("./BaseService");
const AdvertModel = require("../models/Adverts");

class AdvertService extends BaseService {
  constructor() {
    super(AdvertModel);
  }

  list(where) {
    return AdvertModel.find(where || {})
      .populate({
        // Birleştirme işlemi, SQL Join mantığında
        path: "User",
        select: "FirstName LastName",
      })
      .populate({
        path: "Brand",
        select: "Name",
      })
      .populate({
        path: "Model",
        select: "Name",
      }); //Bu şekilde ekleme Yapılabilir /*TODO:Populate Ekleme */
  }
  update(id, data) {
    return AdvertModel.findByIdAndUpdate(id, data, { new: true })
      .populate({
        // Birleştirme işlemi, SQL Join mantığında
        path: "User",
        select: "FirstName LastName",
      })
      .populate({
        path: "Brand",
        select: "Name",
      })
      .populate({
        path: "Model",
        select: "Name",
      });
  }
}

module.exports = new AdvertService();
