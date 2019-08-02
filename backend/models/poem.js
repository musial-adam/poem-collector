const mongoose = require('mongoose')

const Schema = mongoose.Schema

const poemSchema = new Schema ({
  
  author: {
    type: String,
    required: true,
    trim: true,
  },
  
  volume: {
    type: String,
    required: true,
    trim: true,  
  },
  
  year: {
    type: Number,
    required: true,
    // min: 1800,
    // max: 2019,
  },
  
  title: {
    type: String,
    required: true,
    trim: true,
  },
  
  content: {
    type: String,
    required: true,
  },
  
})

const Poem = mongoose.model('Poem', poemSchema)

module.exports = Poem
// exports.module = mongoose.model('Poem', poemSchema)