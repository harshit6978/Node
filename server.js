require('dotenv').config();
const http = require('http');
const express = require("express");
const bodyparser = require('body-parser');
const connetDB = require('./db/db');
const app = express()



app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// db connect 
connetDB();

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})
