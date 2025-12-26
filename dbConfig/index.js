const mongoose = require("mongoose");

const dbConfig = function () {
  return mongoose.connect(process.env.MONGODB_URI).then(function () {
    console.log("DataBase is Connected! 📔");
  });
};

module.exports = dbConfig;
