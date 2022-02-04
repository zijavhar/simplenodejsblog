let config = {}

// basic app config
config.basic = {}
config.mongo = {}

// basic
config.basic.port = 3000

// mongodb
config.mongo.url = 'mongodb://localhost:27017'
config.mongo.dbname = 'blog'


module.exports = config