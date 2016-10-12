// Standard stuff
var express = require('express');

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/family-tree');
mongoose.Promise = global.Promise;

var User = require('./models/user');

// create a new user called chris
var gerry = new User({
  first_name: 'Gerry',
  email: 'gerry@gmail.com',
  meta:{
    age: 27
  }
});

gerry.sayHello();

// save the user
gerry.save(function(err) {
  if (err) throw(err);
  console.log('User created!');
});
