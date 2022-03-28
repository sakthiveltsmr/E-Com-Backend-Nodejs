const mongoose = require("mongoose");

var mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongo db connection successfully");
});
db.on("error", () => {
  console.log("mongo db connection failer");
});

module.exports = mongoose;
