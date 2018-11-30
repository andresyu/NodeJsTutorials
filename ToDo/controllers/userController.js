var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Connect to the database
mongoose.connect('mongodb://admin:admin123@ds225253.mlab.com:25253/nodetutorial')

var urlEncondedParser = bodyParser.urlencoded({extended: false});

var userSchema = new mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('myuser', userSchema);
module.exports = function(app){

  app.get('/register', function(req, res){
    res.render('register');

  });

  app.get('/login', function(req, res){
    res.render('login');
  });

  app.post('/login', urlEncondedParser, function(req, res){
    var newUser = User(req.body).save(function(err, data){
      if (err) throw err;
      res.render('login');
    });
  });


  app.post('/login/check', urlEncondedParser, function(req, res, next){
    User.find({ username: req.body.username, password: req.body.password }, function (err, docs) {
      console.log("Docs = " + docs.length);
      if (docs.length !== 0){
        req.session.username = req.body.username;
        return res.redirect('/todo');
      }else{
        return res.redirect('/login');
      }
    });
  });

  app.get('/logout', function(req, res){
    req.session.destroy(function(err) {
      return res.redirect('/login');
    });
  });

};
