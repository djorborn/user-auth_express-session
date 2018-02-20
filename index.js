const express = require('express')
const app = express()
const path = require('path')
const session = require('./app/modules/session')
const checkForSession = require('./app/modules/session-check')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/app/views'))
app.use(
  [express.json()],
  [express.urlencoded({extended: false})],
  [express.static(path.join(__dirname, '/app/public'))],
  [session()],
  [checkForSession],
  [require('./app/routes/router')]
).listen(3000)
