const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
require('dotenv').config()

const store = new MongoStore({
  uri: process.env.LOCAL,
  collection: 'mySessions'
})

store.on('error', error => {
  var assert
  assert.ifError(error)
  assert.ok(false)
})

module.exports = function () {
  return session({
    secret: 'kittens',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store: store,
    resave: true,
    saveUninitialized: true
  })
}
