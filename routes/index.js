var express = require('express');
var router = express.Router();

let Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find({}, (err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Host Malone',
        posts: posts,
      })
    }
  })
});

module.exports = router;
