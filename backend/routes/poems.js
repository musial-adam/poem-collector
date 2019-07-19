const express = require('express')

const poemsController = require('../controllers/poems')

const router = express.Router()

router.get('/poems', poemsController.getPoems)

router.post('/poems/add', poemsController.addPoem)

module.exports = router