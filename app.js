var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://data123:data123@cluster0.exouw.mongodb.net/Your_World?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Database Connected'))
.catch(err => console.log(err))  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
const ipfsAPI = require('ipfs-api');
const express = require('express');
const fs = require('fs');
const app = express();

//Connceting to the ipfs network via infura gateway
const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})

//Reading file from computer
let testFile = fs.readFileSync("PATH_OF_FILE");
//Creating buffer for ipfs function to add file to the system
let testBuffer = new Buffer(testFile);

//Addfile router for adding file a local file to the IPFS network without any local node
app.get('/addfile', function(req, res) {

    ipfs.files.add(testBuffer, function (err, file) {
        if (err) {
          console.log(err);
        }
        console.log(file)
      })

})
//Getting the uploaded file via hash code.
app.get('/getfile', function(req, res) {
    
    //This hash is returned hash of addFile router.
    const validCID = 'HASH_CODE'

    ipfs.files.get(validCID, function (err, files) {
        files.forEach((file) => {
          console.log(file.path)
          console.log(file.content.toString('utf8'))
        })
      })

})
app.listen(3000, () => console.log('App listening on port 3000!'))

module.exports = app;
