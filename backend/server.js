require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todoactions')
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })


app.use(cors({origin:'*'}))
app.use('/api/todo',todoRoutes)

  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })