const Mongoose = require("mongoose");
const logger = require("../scripts/logger/photo-gallery");
const PhotoSchema = new Mongoose.Schema(
  {
    Advert: {
      type: Mongoose.Types.ObjectId,
      ref: "Advert",
    },
    CoverPhoto: String,
    Photos: [String],
  },
  { versionKey: false, timestamps: true }
);

PhotoSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("PhotoGallery", PhotoSchema);
