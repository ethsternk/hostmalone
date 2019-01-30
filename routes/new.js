var express = require('express');
var router = express.Router();

let Post = require('../models/post');

router.get('/', function (req, res, next) {
  res.render('new', { title: 'New Post Malone' })
});

router.post('/', function (req, res, next) {
  let post = new Post();
  console.log('HIHIHIIIHIHIHIH', req.body)
  post.type = req.body.type;
  post.body = req.body.body
  post.author = req.body.author;
  post.timestamp = Date.now();
  post.save((err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect('/');
    }
  });
})

module.exports = router;
