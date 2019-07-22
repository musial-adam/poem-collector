const Poem = require('../models/poem')

const poemsArray = [
  // {
  //   author: 'Hugo Claus',
  //   volume: 'Oostakkerse gedichten',
  //   year: '1955',
  //   title: 'Marsua',
  //   content: 'De koorts van mijn lied, de landwijn van mijn stem...',
  // },
  // {
  //   author: 'Dummy author',
  //   volume: 'Dummy volume',
  //   year: '2019',
  //   title: 'Dummy title',
  //   content: 'Dummy content',
  // },
]

exports.getPoems = (req, res, next) => {
  res.status(200).json(poemsArray)
}

exports.addPoem = (req, res, next) => {
  
  const {author, volume, year, title} = req.body
  
  console.log(author, volume, year, title)
  
  const poem = new Poem({
    author: author,
    volume: volume,
    year: year,
    title: title,
  })
  // const poem = new Poem({
  //   author, volume, year, title
  // })
  
  poem.save()
  res.send(req.body)

}

// dummy version - storing data in an array

// exports.addPoem = (req, res, next) => {
//   console.log(req.body)
//   poemsArray.push(req.body)
//   res.send(req.body)
// }