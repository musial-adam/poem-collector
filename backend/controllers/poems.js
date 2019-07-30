const dummy = require('mongoose-dummy')



const Poem = require('../models/poem')

exports.getPoems = (req, res, next) => {
  // res.status(200).json(poemsArray)
  Poem.find()
    .then(poems => {
      res.status(200).json(poems)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.addPoem = (req, res, next) => {
  
  const {author, volume, year, title} = req.body

  // const poem = new Poem({
    // author: author
    // volume: volume,
    // year: year,
    // title: title,
  // })
  
  const poem = new Poem({
    author, volume, year, title
  })
  
  poem.save()
    .then(result => {
      res.status(201).send('Poem added')
    })
    .catch(error => {
      console.log(error)
    })
}

exports.deletePoem = (req, res, next) => {
  const poemId = req.params.id
  
  Poem.findById(poemId)
    .then(poem => {
      return Poem.findByIdAndDelete(poemId)
    })
    .then(result => {
      console.log(result)
      res.status(200).json({message: 'Poem deleted'})
    })
    .catch(err => {
      console.log(err)
    })
}

exports.generateRandomPoems = (req, res, next) => {
  
  // res.send('Aloha');
  
  for(i=0; i < 5; i++ ) {
    const dummyPoem = dummy(Poem)
    
    const randomPoem = new Poem({
      author: dummyPoem.author,
      volume: dummyPoem.volume,
      year: dummyPoem.year,
      title: dummyPoem.title,
    })
    
    randomPoem.save()
      .then(result => {
        // res.status(201).send('Random poem added')
      })
      .catch(error => {
        console.log(error)
      })
    
  }
  
  res.status(201).send('Random poems added')
  
  
  // console.log(randomPoem)
  
  // res.status(200).json({message: 'Generated random poems'})
  
//   let randomObject = dummy(model, {
//     ignore: ignoredFields,
//     returnDate: true
// })
// console.log(randomObject);
  
}