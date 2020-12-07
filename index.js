const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/public',express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
