const mongoose = require('mongoose')

const connetDB = () => {

    mongoose.connect(process.env.MONGODB).then(() => {
        console.log("Database is connect");
    }).catch((err) => {
        console.error("databas is not connect",err);
    });

}

module.exports = connetDB