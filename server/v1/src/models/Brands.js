const Mongoose = require("mongoose");
const logger = require("../scripts/logger/brand");
const BrandSchema = new Mongoose.Schema(
  {
    name: String,
    favorite: Boolean,
  },
  { versionKey: false, timestamps: true }
);

BrandSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("Brand", BrandSchema);
