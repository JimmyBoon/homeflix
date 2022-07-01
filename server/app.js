var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');




var indexRouter = require('./routes/index');
var catalogueRouter = require('./routes/catalogue');
const movieRouter = require('./routes/movie');
const imageRouter = require("./routes/image");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movie', movieRouter);
app.use("/image", imageRouter);
app.use('/catalogue', catalogueRouter);

app.get("/metadata", async (req, res) => {
  try {
    // The find() method returns a cursor that manages the results of your query
    const cursor = bucket.find({});
    // Retrieve the data as array
    const filesMetadata = await cursor.toArray();
    res.json(filesMetadata);
  } catch (err) {
    res.json({ err: `Error: ${err.message}` });
  }
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
