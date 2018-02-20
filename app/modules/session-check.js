// const User = require('./User')

module.exports = function (req, res, next) {
  var session = req.session.id
  console.log(session)
  next()
}
