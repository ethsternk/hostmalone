var express = require('express');
var router = express.Router();

let Post = require('../models/post');

router.get('/', function (req, res, next) {
    Post.find({}, (err, posts) => {
        if (err) {
            console.log(err);
        } else {
            res.send(posts)
        }
    })
});

router.post('/', (req, res) => {
    let post = new Post();
    post.type = req.body.type;
    post.body = req.body.body
    post.author = req.body.author;
    post.timestamp = Date.now();
    post.save((err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            res.send(post);
        }
    });
})

module.exports = router;
