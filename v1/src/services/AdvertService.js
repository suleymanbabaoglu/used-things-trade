const BaseService = require("./BaseService");
const AdvertModel = require("../models/Adverts");

class AdvertService extends BaseService {
  constructor() {
    super(AdvertModel);
  }
  findOne(where, expand) {
    if (!expand) return AdvertModel.findOne(where);
    return AdvertModel.findOne(where)
      .populate({
        path: "user_id",
        select: "full_name email profile_image",
      })
      .populate({
        path: "comments",
        populate: {
          path: "user_id",
          select: "full_name email profile_image",
        },
      })
      .populate({
        path: "sub_tasks",
        select:
          "title description isCompleted assigned_to due_date order sub_tasks statuses",
      });
  }
  list(where) {
    return AdvertModel.find(where || {}).populate({
      // Birleştirme işlemi, SQL Join mantığında
      path: "user_id",
      select: "full_name email profile_image",
    });
    // .populate({
    //   path: "project_id",
    //   select: "name",
    // }); //Bu şekilde ekleme Yapılabilir /*TODO:Populate Ekleme */
  }
}

module.exports = new AdvertService();
