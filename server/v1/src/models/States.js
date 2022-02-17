const Mongoose = require("mongoose");
const logger = require("../scripts/logger/state");
const StateSchema = new Mongoose.Schema(
    {
        name: String,
        county: {
            type: Mongoose.Types.ObjectId,
            ref: "Country",
        },
    },
    { versionKey: false, timestamps: true }
);

StateSchema.post("save", (doc) => {
    logger.log({
        level: "info",
        message: doc,
    });
});
module.exports = Mongoose.model("State", StateSchema);
