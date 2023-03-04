const express = require("express");
const router = express.Router();
const dataController = require("../Controllers/data.controller");

router.get("/", dataController.getData);
router.post("/", dataController.postData);
router.delete("/:id", dataController.deleteData);

module.exports = router;
