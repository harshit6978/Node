const { movieSchema } = require("../model");



const movieCreate = (body) => {
    return movieSchema.create(body);
}

module.exports = { movieCreate}