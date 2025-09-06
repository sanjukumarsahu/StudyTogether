const mongoose = require("mongoose");
require("dotenv").config();
exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {})
    .then(() => {
      console.log("DB connect with Mongoose");
    })
    .catch((error) => {
      console.log("DB connection failure");
      console.error(error);
      process.exit(1);
    });
};
