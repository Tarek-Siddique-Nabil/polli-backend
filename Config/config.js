require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 7000,
  },
  db: {
    url: process.env.DB_URL,
  },
};

module.exports = dev;