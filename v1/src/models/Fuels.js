const Mongoose = require("mongoose");
const logger = require("../scripts/logger/fuel");
const FuelSchema = new Mongoose.Schema(
  {
    name: String,
  },
  { versionKey: false, timestamps: true }
);

FuelSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("Fuel", FuelSchema);
