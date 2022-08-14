const handlers = {}

handlers.notFound = (req, res) => {
  req.local = { emoji: '🚀', statusCode: 404, message: "You're lost." }

  res.status(404).render('errors/404', { req })
}

module.exports = handlers
