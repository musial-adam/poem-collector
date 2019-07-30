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

app.post('/', (req, res, next) => {
  console.log('I received post request from somewhere, dude')
  console.log(req.body.author)
  const r = req.body
  res.send(r)
  next()
})


// mongoose.connect('mongodb+srv://adam:EQTGQbN4LAXedCh9@cluster0-52lh1.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.connect('mongodb+srv://adam:uiPW4XX4jFXmbd2n@cluster0-52lh1.mongodb.net/poems-collector?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(res => {
    console.log('SUCCESS')
    app.listen(3001)
  }
  )
  .catch(err => {
    console.log(err)
  })
