const express = require('express')
const getAllData = require('./controllers/getAllData')

const app = express()

app.get('/', getAllData)

app.listen(1411, () => {
  console.log('Listening on port 1411 buttercup...') // eslint-disable-line no-console
})


