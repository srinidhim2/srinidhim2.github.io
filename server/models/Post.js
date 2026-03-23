const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
  url: String,
  caption: String,
  user: String,
  created: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Post', PostSchema)