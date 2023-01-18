const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://anshul:anshul@cluster0.outmoix.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.set("strictQuery", true).connect(connectString);
};

module.exports = connectDB;
