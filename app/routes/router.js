const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  })
})

router.use('/login', require('./login'))

router.use('/register', require('./register'))

router.use('/about', (req, res) => {
  res.render('home', {
    title: 'About'
  })
})

module.exports = router
