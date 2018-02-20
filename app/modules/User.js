const mongoose = require('./mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  profile: {
    email: String,
    name: String
  },
  session: String,
  post: [{type: Schema.ObjectId, ref: 'Post'}]
})

module.exports = mongoose.model('User', userSchema)
