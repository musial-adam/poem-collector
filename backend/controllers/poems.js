exports.getPoems = (req, res, next) => {
  console.log('Hi dude, you are in getPoems!')
  res.send('getPoems')
  // next()
}

exports.addPoem = (req, res, next) => {
  console.log('You bastard, you tried to create a poem')
  // const reqBody = req.body
  res.send(req.body)
  
  
  // res.send('You bastard, you tried to create a poem')
  // next()
}