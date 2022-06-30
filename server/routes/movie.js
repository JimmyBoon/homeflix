var express = require("express");
var router = express.Router();
const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");

// Connection URI
// const uri = "mongodb://localhost:27017";
const uri = "mongodb://192.168.0.38:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

/* GET me page. */
router.get("/", function (req, res) {
  let filename = req.query.movie;

  client.connect(async function (err) {
    console.log("Connected Successfully!");

    const database = client.db("movies");

    const collection = database.collection("fs.files");

    const search = await collection.findOne({ filename: filename });

    console.log(search);
    if (search === null) {
      client.close();
      res.send("<h1>Movie is not in database</h1>");
      return;
    }
    const bucket = new mongodb.GridFSBucket(database);

    bucket.openDownloadStreamByName(filename).pipe(res);
  });
});

module.exports = router;
