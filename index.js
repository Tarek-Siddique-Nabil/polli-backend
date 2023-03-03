const app = require("./app");
const config = require("./Config/config");
const { connectDB } = require("./Config/db");
const PORT = config.app.port;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
