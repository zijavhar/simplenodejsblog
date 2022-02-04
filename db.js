const config = require('./config')
const { MongoClient } = require('mongodb')
// mongodb
const client = new MongoClient(config.mongo.url)
const dbName = config.mongo.dbname

async function connect() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  return db
}

const dbConn = connect
module.exports = dbConn