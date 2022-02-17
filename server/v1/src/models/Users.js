const Mongoose = require("mongoose");
const logger = require("../scripts/logger/user");
const UserSchema = new Mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    Gender: Boolean,
    BirthDate: Date,
    ProfileType: Boolean,
    PostalCode: String,
    Address: String,
    Country: String,
    Password: String,
    Email: {
      type: String,
      unique: true,
    },
    Phone: {
      type: String,
      unique: true,
    },
    ProfileImage: String,
    UpdatesEmail: Boolean,
    MessageEmail: Boolean,
  },
  { versionKey: false, timestamps: true }
);

//UserSchema.pre("save", (next) => {});

UserSchema.post("save", (doc) => {
  logger.log({
    level: "info",
    message: doc,
  });
});
module.exports = Mongoose.model("User", UserSchema);
