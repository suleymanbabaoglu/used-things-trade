const Mongoose = require("mongoose");
const logger = require("../scripts/logger/advert");
const AdvertSchema = new Mongoose.Schema(
  {
    Brand: {
      type: Mongoose.Types.ObjectId,
      ref: "Brand",
    },
    Model: {
      type: Mongoose.Types.ObjectId,
      ref: "Model",
    },
    Price: Mongoose.Types.Decimal128,
    Kilometer: Number,
    FirstRegistration: Date,
    /*Type: {
      type: Mongoose.Types.ObjectId,
      ref: "VehicleType",
    },*/
    Type: String,
    Warranty: Boolean,
    /*Status: {
      type: Mongoose.Types.ObjectId,
      ref: "VehicleStatus",
    },*/
    Status: String,
    Advertiser: Boolean,
    HorsePower: Number,
    KiloWatts: Number,
    /*Fuel: {
      type: Mongoose.Types.ObjectId,
      ref: "Fuel",
    },*/
    Fuel: String,
    /*Transmission: {
      type: Mongoose.Types.ObjectId,
      ref: "Transmission",
    },*/
    Transmission: String,
    Drive: Number,
    /*Color: {
      type: Mongoose.Types.ObjectId,
      ref: "Color",
    },*/
    Color: String,
    Doors: Number,
    Seats: Number,
    /*Country: {
      type: Mongoose.Types.ObjectId,
      ref: "Country",
    },
    State: {
      type: Mongoose.Types.ObjectId,
      ref: "State",
    },
    City: {
      type: Mongoose.Types.ObjectId,
      ref: "City",
    },*/

    User: {
      type: Mongoose.Types.ObjectId,
      ref: "User",
    },
    Country: String,
    State: String,
    City: String,
    AdvertStatus: Boolean,
    Description: String,
  },
  { versionKey: false, timestamps: true }
);

AdvertSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("advert", AdvertSchema);
