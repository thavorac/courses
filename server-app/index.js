const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require("path")
const cors = require('cors')

const routes = require('./routes/app_routes')
const app = express()
const port = 3000

try {
  app.use(cors())
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())
  app.use(routes)
} catch (err) {
  console.log(err)
}

mongoose.connect('mongodb+srv://user1:helloword@cluster0.qyreg.mongodb.net/Post?retryWrites=true&w=majority')
.then(result => {
  console.log("Db is connected")
  app.listen(port)
}).catch(err => {
  console.log(err)
})