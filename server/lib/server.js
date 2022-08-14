/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const express = require('express')
const ip = require('ip')
const { Logger } = require('betterlogger.js')

const logger = new Logger('server').setDebugging(99)

const expressInit = require('./express-init')
const passportInit = require('./passport-init')
const config = require('./config')
const routes = require('./routes')

const app = express()

const server = {}

expressInit.init(app)
passportInit.init(app)

server.init = () => {
  routes.init(app)

  app.listen(config.port, () => {
    logger.debug(`Running on http://${ip.address()}:${config.port}`)
  })
}

module.exports = server
