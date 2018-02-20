const login = require('express').Router()

login.get('/', (req, res) => {
  res.render('form', {
    title: 'Login'
  })
})

module.exports = login
