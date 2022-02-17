const Mongoose = require("mongoose");
const logger = require("../scripts/logger/city");
const CitySchema = new Mongoose.Schema(
  {
    name: String,
    state: {
      type: Mongoose.Types.ObjectId,
      ref: "State",
    },
  },
  { versionKey: false, timestamps: true }
);

CitySchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("City", CitySchema);
