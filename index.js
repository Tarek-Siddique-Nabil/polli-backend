const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

// DB CONNECT
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ks8pu4s.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// start
 async function run(){
    try{
        await client.connect();
        const dataCollection = client.db('Data').collection('data');
        app.get('/data', async(req,res)=>{
          const query = {};
          const result = await dataCollection.find(query).toArray();
          res.send(result)
        })

       app.post('/data',async (req,res)=>{
        const data = req.body;
        const result = await dataCollection.insertOne(data);
        res.send(result)
       })
       app.delete('/data/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: ObjectId(id)};
        const result = await dataCollection.deleteOne(query)
        res.send(result)
       })
      
    }
    finally{

    }
 }
 run().catch(console.dir)
app.get("/", (req, res) => {
  res.send("Polli Prottasha Server");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
