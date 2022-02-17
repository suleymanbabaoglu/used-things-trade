const Mongoose = require("mongoose");
const logger = require("../scripts/logger/vehicle-type");
const VehicleTypeSchema = new Mongoose.Schema(
    {
        name: String,
    },
    { versionKey: false, timestamps: true }
);

VehicleTypeSchema.post("save", (doc) => {
    logger.log({
        level: "info",
        message: doc,
    });
});
module.exports = Mongoose.model("VehicleType", VehicleTypeSchema);
