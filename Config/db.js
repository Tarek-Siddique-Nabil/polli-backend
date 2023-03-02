const mongoose = require("mongoose");
const config = require("./config");
mongoose.set('strictQuery', true);
const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connect Mongodb Atlas");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });