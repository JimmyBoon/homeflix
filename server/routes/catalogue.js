var express = require("express");
var router = express.Router();
const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");

// Connection URI
//const uri = "mongodb://localhost:27017";
const uri = "mongodb://192.168.0.38:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

/* GET me page. */
router.get("/", function (req, res) {


  client.connect(async function (err) {
    console.log("Connected Successfully!");

    const database = client.db("movies");

    const collection = database.collection("catalog");

    const catalog = await collection.find().toArray();

    res.status(200);
    res.json(catalog);

    await client.close();
  });


});

module.exports = router;
