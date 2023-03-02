const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("./Config/db");
// routes 
 const dataRouter = require("./Routes/data.route")

// middleware

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/data",dataRouter);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./Views/index.html");
  });
  
  // handling route not found
  app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/Views/NotFound.html");
  });
  
  // handling server error
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: "Something Broke",
    });
  });
  module.exports = app;