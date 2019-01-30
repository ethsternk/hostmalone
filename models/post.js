let mongoose = require('mongoose');

// post schema
let postSchema = mongoose.Schema({
    type: {
        // postmalone, boastmalone, roastmalone
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        // defaults to "anonymous" if left blank
        type: String,
        required: false,
    },
    timestamp: {
        type: Date,
        required: true,
    },
})

let Post = module.exports = mongoose.model('Post', postSchema);