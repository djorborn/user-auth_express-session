const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  author: {type: Schema.ObjectId, ref: 'User'},
  body: String,
  time: Date
})

module.exports = mongoose.model('Post', postSchema)
