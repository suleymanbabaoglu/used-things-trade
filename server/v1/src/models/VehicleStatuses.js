const Mongoose = require("mongoose");
const logger = require("../scripts/logger/vehicle-status");
const VehicleStatusSchema = new Mongoose.Schema(
  {
    name: String,
  },
  { versionKey: false, timestamps: true }
);

VehicleStatusSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("VehicleStatus", VehicleStatusSchema);
