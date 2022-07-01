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
  let filename = req.query.image;

  client.connect(async function (err) {
    console.log("Connected Successfully!");

    const database = client.db("movies");

    const collection = database.collection("fs.files");

    collection.findOne({ filename: filename }, (err, image) => {
      if (!image) {
        const bucket = new mongodb.GridFSBucket(database);

        const downloadStream = bucket.openDownloadStreamByName("default.jpg");

        downloadStream.pipe(res);

        return;
      }

      res.status(200);
      const bucket = new mongodb.GridFSBucket(database);

      const downloadStream = bucket.openDownloadStreamByName(filename);

      downloadStream.pipe(res);
    });
  });
});

module.exports = router;
