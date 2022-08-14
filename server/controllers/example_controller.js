const { Logger } = require('betterlogger.js')

const controller = {}

module.exports.name = controller.name = 'controller_name'

const logger = new Logger(`CONTROLLER ${controller.name}`).setDebugging(99)

controller.index = async (req, res) => {
  logger.info('Index')
  res.render('controller', { req })
}

module.exports.methods = [{ method: 'GET', path: '/', handler: controller.index }]
