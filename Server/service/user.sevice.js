const { userSchema } = require("../model")



const userPost = (body) => {
    return userSchema.create(body)
}
const findUserByEmail = (email) => {
    return userSchema.findOne({ email })
}

module.exports = { userPost, findUserByEmail }