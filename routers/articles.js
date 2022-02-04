const { Router } = require('express')
const dbConn = require('../db') 

const router = Router()

router.get('/test', async (req, res) => {
  const db = await dbConn()
  const articles = await db.collection('articles').find({}).toArray()
  console.log(articles)
  //let a = await dbConn.collection('articles').insertOne({'a': 4, 'b': 6})
  //console.log(a)
  res.send('test')
})


module.exports = router