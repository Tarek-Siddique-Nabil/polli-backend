const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json()); // Use middleware to parse JSON requests

// DB CONNECT
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
// Routes
async function run() {
  try {
    await client.connect();
    const dataCollection = client.db("Data").collection("data");

    app.get("/data", async (req, res) => {
      const query = {};
      const result = await dataCollection
        .find(query)
        .sort({ timestamp: -1 })
        .toArray();
      res.send(result);
    });

    app.post("/data", async (req, res, next) => {
      try {
        const data = req.body;
        const result = await dataCollection.insertOne(data);
        res.send(result);
      } catch (err) {
        next(err); // Pass the error to the error handling middleware
      }
    });

    app.delete("/data/:id", async (req, res, next) => {
      try {
        const id = req.params.id;
        const query = { _id: ObjectId(id) };
        const result = await dataCollection.deleteOne(query);
        res.send(result);
      } catch (err) {
        next(err); // Pass the error to the error handling middleware
      }
    });
  } catch (err) {
    console.error(err);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Polli Prottasha Server");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});






