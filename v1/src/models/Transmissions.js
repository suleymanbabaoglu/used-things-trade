const Mongoose = require("mongoose");
const logger = require("../scripts/logger/transmission");
const TransmissionSchema = new Mongoose.Schema(
  {
    name: String,
  },
  { versionKey: false, timestamps: true }
);

TransmissionSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("Transmission", TransmissionSchema);
