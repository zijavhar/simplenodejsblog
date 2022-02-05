const express = require('express')
const config = require('./config')
const articlesRouter = require('./routers/articles')

const app = express()
const port = config.basic.port

// middlewares
app.use(express.json());
app.use('/articles', articlesRouter)

app.listen(port, () => {
  console.log('server running')
})