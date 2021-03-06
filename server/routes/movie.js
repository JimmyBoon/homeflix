var express = require("express");
var router = express.Router();
const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");
const fs = require("fs");

// Connection URI
const uri = "mongodb://192.168.0.38:27017";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

router.get("/", function (req, res) {
  let filename = req.query.movie;

  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  client.connect(async function (err) {
    console.log("Connected Successfully!");

    const database = client.db("movies");

    const collection = database.collection("fs.files");

    collection.findOne({ filename: filename }, (err, video) => {
      if (!video) {
        res.status(404).send("No video uploaded!");
        return;
      }
      console.log("File Found");

      // Create response headers
      const videoSize = video.length;
      const start = Number(range.replace(/\D/g, ""));
      const end = videoSize - 1;

      const contentLength = end - start + 1;
      const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
      };

      res.writeHead(206, headers);

      //Send the movie
      const bucket = new mongodb.GridFSBucket(database);
      console.log("Beginning download");
      const downloadStream = bucket
        .openDownloadStreamByName(filename, {
          start,
          end: video.length,
        });

      downloadStream.pipe(res);
    });
  });
});

module.exports = router;
