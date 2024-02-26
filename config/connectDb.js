const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pureThreads");
    console.log("Connect to DB");
  } catch (error) {
    console.log("Error connecting to Db", error);
  }
};

module.exports = connectDb;
