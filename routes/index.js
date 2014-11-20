var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res) {
  res.render('index', { title: 'Joe Lau\'s App',
                       age: 33});
//   res.send({users: ['will', 'laura']});
});
router.get('/get', function(req, res) {
  console.log(req.query);
});

router.get('/users/:id', function(req, res) {
  console.log(req.params);
  res.send(req.params.id, 200);
});

// load all models in dir
fs.readdirSync(__dirname + '/../models').forEach(
  function(filename){
    if (~filename.indexOf('.js'))
      require(__dirname + '/../models/' + filename);
  });

router.get('/users', function (req, res) {
  mongoose.model('users').find(function (err, users){
      res.send(users);
  });
});

router.get('/posts', function (req, res) {
  mongoose.model('posts').find(function (err, posts){
      res.send(posts);
  });
});

router.get('/posts/:userId', function (req, res) {
  mongoose.model('posts').find({user: req.param.userId}, function (err, posts){
//       res.send(posts);
    mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts){
      res.send(posts);
    });
  });
});

module.exports = router;
