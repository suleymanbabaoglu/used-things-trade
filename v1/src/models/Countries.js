const Mongoose = require("mongoose");
const logger = require("../scripts/logger/country");
const CountrySchema = new Mongoose.Schema(
  {
    name: String,
  },
  { versionKey: false, timestamps: true }
);

CountrySchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("Country", CountrySchema);
