const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const { Logger } = require('betterlogger.js')

const config = require('./config')

const logger = new Logger('passport-init').setDebugging(99)

module.exports.init = app => {
  logger.info('Passport init')

  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(
    new GoogleStrategy(
      {
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: config.google.callbackURL
      },
      (accessToken, refreshToken, profile, done) => {
        done(null, profile)
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user)
  })

  app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/')
  })

  logger.info('Passport initialized')
}
