var express = require('express');
var session = require('express-session');
var todoController = require('./controllers/todoController');
var userController = require('./controllers/userController');

var app = express();
app.use(session({
  secret:'todoSession',
  resave: false,
  saveUninitialized: true
}));

// setup template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// trigger controllers
todoController(app);
userController(app);

// listen to port
app.listen(3000);
console.log('Listening to port 3000');
