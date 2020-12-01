const mongoose = require("mongoose");
const mongooseCon = mongoose.connection; //mongoose connection alias
const logError = console.error.bind(console, "Connection error:");
const logMongo = console.log.bind(console, "MongoDb");

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    logMongo(`connected to ${dbConnection.connection.host}`);
  } catch (err) {
    logError(err);
    process.exit(1);
  }
};

mongooseCon.on("connecting", () => logMongo(`connecting..`));
mongooseCon.on("disconnecting", () => logMongo(`disconnecting..`));
mongooseCon.on("disconnected", () => logMongo(`disconnected from ${mongooseCon.host}`));
mongooseCon.on("reconnected", () => logMongo(`reconcected to ${mongooseCon.host}`));

module.exports = connectDB;