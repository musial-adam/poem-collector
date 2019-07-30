const express = require('express')

const poemsController = require('../controllers/poems')

const router = express.Router()

router.get('/poems', poemsController.getPoems)

router.post('/poems/add', poemsController.addPoem)

router.delete('/poems/:id', poemsController.deletePoem)

router.get('/poems/random', poemsController.generateRandomPoems)

module.exports = router