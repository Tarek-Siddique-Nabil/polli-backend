const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    
  },
  role: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  name: {
    type: String,
  },
  grade: {
    type: String,
  },
  phone: {
    type: String,
  },
  details: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
