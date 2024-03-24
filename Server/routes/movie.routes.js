const express = require('express');
const { movieController } = require('../controller');
const route = express.Router()


route.post('/addmovie', movieController.CreateMovie);
route.get('/getMovie', movieController.getMovie)

module.exports = route