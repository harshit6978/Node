require('dotenv').config();
const http = require('http');
const express = require("express");
const bodyparser = require('body-parser');
const connetDB = require('./db/db');
const routes = require('./routes');
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser');




app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());
// db connect 
connetDB();

// route 
app.use('/v1', routes)


http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})
