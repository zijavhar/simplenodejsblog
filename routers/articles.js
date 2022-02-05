const { Router } = require('express')
const dbConn = require('../db') 
const { ObjectId } = require('mongodb')
const router = Router()

router.get('/', async (req, res) => {
  const db = await dbConn();
  const articles = await db.collection('articles').find().project({"published": 0, "content": 0}).toArray();
  res.send(articles);
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const db = await dbConn()
  const article = await db.collection('articles').find({"_id": id}).project({"published": 0, "content": 0}).toArray()
  res.send(article)
})

router.post('/', async (req, res) => {
  const article = req.body;
  const db = await dbConn();
  // save an article
  db.collection('articles').insertOne(article);
  res.send("test");
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const db = await dbConn();
  const s = db.collection('articles').deleteOne({"_id": new ObjectId(id)}, function(err, obj) {
    // if id of article was not found
    if (obj.deletedCount == 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204)
    }
  });
  
})

router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const db = await dbConn()
  db.collection('articles').findOneAndUpdate({"_id": new ObjectId(id)}, {'$set': req.body})
  res.send("Ok")
})

module.exports = router