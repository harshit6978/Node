const mongoose = require('mongoose')

const movieschema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    actor: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    movieImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    }
});

const movie = mongoose.model('movieSchema', movieschema)
module.exports = movie;