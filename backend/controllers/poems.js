const dummy = require('mongoose-dummy')

const Poem = require('../models/poem')

exports.getPoems = async (req, res, next) => {    
  
  try {
    const poems = await Poem.find()
    res.status(200).json(poems)
  }
  catch (error) {
    console.log(error)
  }
}

exports.getSinglePoem = async (req, res, next) => {
  const poemId = req.params.id

  try {
    const poem = await Poem.findById(poemId)
    res.status(200).json(poem)
  }
  catch (error) {
    console.log(error);
  }
  
}

exports.addPoem = async (req, res, next) => {
  
  const { author, volume, year, title, content } = req.body
  
  const poem = new Poem({
    author, volume, year, title, content,
  })
  
  try {
    await poem.save()
    res.status(201).send('Poem added')
  }
  catch (error) {
    console.log(error)
  }
}

exports.deletePoem = async (req, res, next) => {
  const poemId = req.params.id
  
  try {
    const poem = await Poem.findById(poemId)
    if (poem) {
      await Poem.findByIdAndDelete(poemId)
      res.status(200).send('Poem deleted')
    }
    else {
      res.status(404).send('Poem could not be deleted, because it was not found')
    }
  }
  catch (error) {
    console.log(error)
  }
}

exports.updatePoem = async (req, res, next) => {
  
  const poemId = req.params.id
  
  const { author, volume, year, title, content } = req.body
  
  try {
    const poem = await Poem.findById(poemId)
    if (poem) {
      poem.author = author
      poem.volume = volume
      poem.year = year
      poem.title = title
      poem.content = content
      
      await poem.save()
      res.status(200).send('Poem updated')
    }  
  }
  catch (error) {
    console.log(error)
  }
}

exports.generateRandomPoems = async (req, res, next) => {
  
  for(i=0; i < 3; i++ ) {
    const dummyPoem = dummy(Poem)
    
    const randomPoem = new Poem({
      author: dummyPoem.author,
      volume: dummyPoem.volume,
      year: dummyPoem.year,
      title: dummyPoem.title,
      content: dummyPoem.content,
    })
    
    
    await randomPoem.save()
  }
  
  res.status(201).send('Random poems added')
}