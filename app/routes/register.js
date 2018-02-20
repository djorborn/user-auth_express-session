const register = require('express').Router()
const User = require('../modules/User')
const bcrypt = require('bcrypt')

register.get('/', (req, res) => {
  res.render('form', {
    title: 'Register'
  })
})

register.post('/', (req, res) => {
  var salt = bcrypt.genSaltSync(10)
  var username = req.body.username
  var password = bcrypt.hashSync(req.body.password, salt)
  var email = req.body.email
  var session = req.session.id
  createNewUser(username, password, email, session)
  req.session.user = username
  req.session.auth = true
  res.redirect('/')
})

module.exports = register

function createNewUser (username, password, email, session) {
  const user = new User({
    username: username,
    password: password,
    profile: {
      email: email
    },
    session: session
  })
  user.save()
}
