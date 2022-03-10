const Mongoose = require("mongoose");
const logger = require("../scripts/logger/model");
const ModelSchema = new Mongoose.Schema(
  {
    Name: String,
    Brand: {
      type: Mongoose.Types.ObjectId,
      ref: "Brand",
    },
  },
  { versionKey: false, timestamps: true }
);

ModelSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("Model", ModelSchema);
