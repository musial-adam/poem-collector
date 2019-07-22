const mongoose = require('mongoose')

const Schema = mongoose.Schema

const poemSchema = new Schema ({
  author: {
    type: String,
    required: true,
  },
  
  volume: {
    type: String,
    required: true,  
  },
  
  year: {
    type: Number,
    required: true,
  },
  
  title: {
    type: String,
    required: true,
  },
  
  // content: {
  //   type: String,
  //   required: true,
  // },
  
})

exports.module = mongoose.model('Poem', poemSchema)