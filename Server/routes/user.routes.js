const express = require('express');
const { userController } = require('../controller');
const { authenticate } = require('../middleware/auth');
const route = express.Router()



route.post('/register', userController.userPost)
route.post('/login', userController.login)
route.get('/profile', authenticate, userController.getProfile)


module.exports = route;