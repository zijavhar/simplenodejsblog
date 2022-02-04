const express = require('express')
const config = require('./config')
const articlesRouter = require('./routers/articles')

const app = express()
const port = config.basic.port

app.use('/articles', articlesRouter)

app.listen(port, () => {
  console.log('server running')
})