const { movieSchema } = require("../model");



const movieCreate = (body) => {
    return movieSchema.create(body);
}

const getAllMovies = () => {
    return movieSchema.find()
}
module.exports = { movieCreate, getAllMovies }