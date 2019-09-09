const express = require('express')

const poemsController = require('../controllers/poems')

const router = express.Router()

router.get('/poems/random', poemsController.generateRandomPoems)

router.get('/poems/:id', poemsController.getSinglePoem)

router.get('/poems', poemsController.getPoems)

router.post('/poems/add', poemsController.addPoem)

router.delete('/poems/:id', poemsController.deletePoem)

router.put('/poems/:id', poemsController.updatePoem)

module.exports = router