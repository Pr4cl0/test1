const config = {}

config.port = process.env.PORT || 1337
config.wsPort = process.env.WS_PORT || 1338
config.hashingSecret = process.env.HASHING_SECRET || 'this is a secret'

config.google = {}

config.google.clientID = process.env.GOOGLE_CLIENT_ID || 'google client id'
config.google.clientSecret = process.env.GOOGLE_CLIENT_SECRET || 'google client secret'
config.google.callbackURL = process.env.GOOGLE_CALLBACK_URL || 'google callback url'

module.exports = config
