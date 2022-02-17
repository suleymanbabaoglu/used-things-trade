const Mongoose = require("mongoose");
const logger = require("../scripts/logger/color");
const ColorSchema = new Mongoose.Schema(
  {
    name: String,
    code: String,
  },
  { versionKey: false, timestamps: true }
);

ColorSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("Color", ColorSchema);
