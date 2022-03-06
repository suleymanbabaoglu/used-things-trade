const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
  console.log("Db Connected...");
});

const connectDB = async () => {
  await Mongoose.connect(
    // `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT})/${process.env.DB_NAME}`,
    "mongodb://localhost:27017/used-things-trade",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = {
  connectDB,
};
