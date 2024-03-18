const mongoose = require('mongoose')


const movieschema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }


});