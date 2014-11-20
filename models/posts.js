var mongoose = require('mongoose');
var Schema = mongoose.Schema

var postSchema = new Schema({
  content: String,
  user: {
    type: Schema.ObjectId,
    ref: 'users'
  }
});

mongoose.model('posts',postSchema);
