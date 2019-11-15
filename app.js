global.__basedir = __dirname;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var uIRouter = require('./routes/ui');
var adminRouter = require('./routes/admin');
var moderatorRouter = require('./routes/moderator');
var userRouter = require('./routes/user');
var scriptsRouter = require('./routes/scripts');
var cors = require('cors')
var debug = require('debug')('mean-angular6:server');
var http = require('http');
var mongoDB = require('./model/mongo');


var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/cyoq')));
app.use('/', express.static(path.join(__dirname, 'dist/cyoq')));
app.use('/public', express.static('public'));

// routes
app.use('/api/admin', adminRouter);
app.use('/api/moderator', moderatorRouter);
app.use('/api/user', userRouter);

app.use('/ui', uIRouter);
app.use('/scripts', scriptsRouter);


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
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
//app.set('views', 'views');
//app.set('view engine', 'ejs');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);


/**
 * Create Mongo DB connection
 */

mongoDB.connectMongo()
  /**
   * Listen on provided port, on all network interfaces.
   */
  .then(() => console.log('database connected'))
  .then(() => server.listen(port))
  .then(() => server.on('error', onError))
  .then(() => server.on('listening', onListening))

  .catch((e) => {
    console.error(e);
    // Always hard exit on a database connection error
    process.exit(1);
  });

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}

