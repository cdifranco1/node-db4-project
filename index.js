const express = require('express')
const port = process.env.PORT || 5000
const server = express()
const apiRoute = require('./api')


server.use(express.json())

server.use('/api', apiRoute)


server.listen(port, () => {
  console.log(`Listening at port: ${port}`)
})
