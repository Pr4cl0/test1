/* eslint-disable global-require */
const express = require('express')
const { Logger } = require('betterlogger.js')

const handlers = require('./handlers')

const routes = {}

const logger = new Logger('routes').setDebugging(99)

routes.init = async app => {
  app.use((req, res, next) => {
    req.User = () => {
      if (req.session.passport) {
        return req.session
      } else {
        return null
      }
    }

    req.local = {}

    logger.request(`${req.ip} > [${req.method}] /${req.path.replace(/^\/+|\/+$/g, '')} - ${JSON.stringify(req.body)}`)

    next()
  })

  await routes.genRoute(app)

  app.use(handlers.notFound)
}

routes.genRoute = async app => {
  const example = require('../controllers/example_controller')
  app.use(`/${example.name}`, routes.createRouter(example))
}

routes.createRouter = module => {
  const router = express.Router()

  router.use((req, res, next) => {
    next()
  })

  module.methods.forEach(method => {
    if (method.method === 'GET') router.get(method.path, method.handler)
    else if (method.method === 'POST') router.post(method.path, method.handler)
    // ? ...
  })

  return router
}

module.exports = routes
