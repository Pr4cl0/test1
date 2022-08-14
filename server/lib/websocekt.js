const webSocket = require('ws')
const ip = require('ip')
const { Logger } = require('betterlogger.js')
const config = require('./config')

const server = {}

const logger = new Logger('websocket').setDebugging(99)
const wss = new webSocket.Server({ port: config.wsPort })

wss.on('connection', (ws, req) => {
  logger.debug(`New connection from ${req.headers.host}`)
})

server.init = () => {
  logger.debug(`Running on ws://${ip.address()}:${config.wsPort}`)
}

module.exports = server
