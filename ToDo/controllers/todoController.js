var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://admin:admin123@ds225253.mlab.com:25253/nodetutorial')

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String,
  username: String
});

var Todo = mongoose.model('Todo', todoSchema);


//var data = [{item: 'get milk'}, {item: 'wal dog'}, {item: 'finish this tutorial'}];
var urlEncondedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    // Get data from mongoDB and pass it to the view
    if (req.session.username){
      Todo.find({username: req.session.username}, function(err, data){
        if (err) throw err;
        //console.log(req.session.username);
        res.render('todo', {todos: data, username: req.session.username});
      });
    }else{
      return res.redirect('/login')
    }
  });

  app.post('/todo', urlEncondedParser, function(req, res){
    // Get data from view and add it to mongoDB
    if (req.session.username){
      data = {
        item: req.body.item,
        username: req.session.username
      }
      console.log(data);
      var newTodo = Todo(data).save(function(err, data){
        if (err) throw err;
        res.json(data)
      })
    }else{
      return res.redirect('/login')
    }
  });

  app.delete('/todo/:item', function(req, res){
    // Delete requested item from mongodb
    if (req.session.username){
      Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
        if (err) throw err;
        res.json(data);
      });
    }else{
      return res.redirect('/login')
    }
  });

};
