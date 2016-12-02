var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var contentSchema = new Schema({
    create_at: Date,
    last_update: Date,
    author: String,
    tags: [],
    text: String
});


module.exports = mongoose.model('Content', contentSchema);;