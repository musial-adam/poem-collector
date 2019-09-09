const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const poemsRoutes = require('./routes/poems')

const app = express()

app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Temporary fix for favicon get request
app.get('/favicon.ico', (req, res, next) => {
  res.status(204)
})


app.use('/api', poemsRoutes)

mongoose.connect('mongodb+srv://adam:uiPW4XX4jFXmbd2n@cluster0-52lh1.mongodb.net/poems-collector?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(res => {
    console.log('SUCCESS')
    app.listen(3001)
  }
  )
  .catch(err => {
    console.log(err)
  })
