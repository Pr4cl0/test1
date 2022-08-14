const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')
// ! v buducnosti prejsť na mongo alebo redis
const JsonStore = require('express-session-json')(session)

const { Logger } = require('betterlogger.js')

const logger = new Logger('express-init').setDebugging(99)

module.exports.init = app => {
  logger.info('Express init')
  app.use(
    bodyParser.json({
      verify: (req, res, buf) => {
        req.rawBody = buf
      }
    })
  )

  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(cookieParser('QPyae3xxxxxxxxxxxxxxxxMcdK'))
  app.use(
    session({
      secret: 'i0riQxxxxxxxxxxxxxxxRv',
      name: 'oreo',
      resave: false,
      saveUninitialized: true,
      store: new JsonStore({
        path: './data/'
      })
    })
  )

  app.use(express.static('./client/public'))
  app.use(expressLayouts)

  app.set('layout', './template')
  app.set('trust proxy', true)
  app.set('view engine', 'ejs')
  app.set('views', './client/views')

  logger.info('Express initialized')
}
