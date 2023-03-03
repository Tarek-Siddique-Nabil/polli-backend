const mongoose = require("mongoose");
const config = require("./config");
mongoose.set('strictQuery', false);
const dbURL = config.db.url;

const dbController ={
async  connectDB (){
    try {
      const conn = await mongoose.connect(dbURL);
      console.log(`MongoDB Connected : ${conn.connection.host}`)
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}

module.exports = dbController;