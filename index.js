const express = require('express')
const app = express()
const port = 3000
require('./src/models')
const courseRoutes = require('./src/router/course.routes')

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 app.use(courseRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
