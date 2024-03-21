const express = require('express')
const routes = express.Router();
const userRoute = require("./user.routes")
const movieRoute = require('./movie.routes')

routes.use('/user', userRoute)
routes.use('/movie', movieRoute)

module.exports = routes