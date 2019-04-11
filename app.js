global.__basedir = __dirname;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var uIRouter = require('./routes/ui');
var apiRouter = require('./routes/api');
var adminRouter = require('./routes/admin');
var moderatorRouter = require('./routes/moderator');
var userRouter = require('./routes/user');
var scriptsRouter = require('./routes/scripts');
var mongo = require('./model/mongo');
var cors = require('cors')


var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/cyoq')));
app.use('/', express.static(path.join(__dirname, 'dist/cyoq')));

// routes
app.use('/admin', adminRouter);
app.use('/moderator', moderatorRouter);
app.use('/user', userRouter);

app.use('/api', apiRouter);
app.use('/scripts', scriptsRouter);
//app.use('/ui',uIRouter);

mongo.connectMongo();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-xsrf-token, X-Requested-With, Accept, Expires, Last-Modified, Cache-Control");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Set the application view engine and 'views' folder
app.set('views', 'views');
app.set('view engine', 'ejs');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

//app.listen(3000);

module.exports = app;