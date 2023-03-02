const Data = require("../models/data.model");

const dataController = {
  async getData(req, res, next) {
    try {
      const query = {};
      const result = await Data.find(query).sort({ timestamp: -1 });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },

  async postData(req, res, next) {
    try {
      const {
        imageUrl,
        role,
        title,
        name,
        grade,
        phone,
        details,
        email,
        message,
      } = req.body;
      console.log(req.body)
      const data = new Data({
        imageUrl,
        role,
        title,
        name,
        grade,
        phone,
        details,
        email,
        message,
      });
      await data.save();
      const find = await Data.find({}).sort({ timestamp: -1 });

      res.send(find);
    } catch (err) {
      next(err);
    }
  },

  async deleteData(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Data.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = dataController;
