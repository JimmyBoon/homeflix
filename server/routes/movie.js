var express = require("express");
var router = express.Router();
var path = require("path");
const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");
const fs = require("fs");

// Connection URI
const uri = "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

/* GET me page. */
router.get("/", function (req, res) {
  let filename = req.query.movie

  try {
    client.connect();
    const db = client.db("movies");

    const bucket = new mongodb.GridFSBucket(db);

    bucket
      .openDownloadStreamByName(filename)
      .pipe(res);

    //   client.close();
  } catch (err) {
    console.log("error", err);
    res.send("<h1>Movie is not in database</h1>");
  }

});

module.exports = router;
