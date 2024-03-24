const jwt = require('jsonwebtoken')
const secretKey = process.env.JWTSECRET;

const Createtoken = (data) => {
    return jwt.sign({ data }, secretKey) 
}

const authenticate = (req, res,next) => {
    let token = req.cookies['token']
    console.log(token, "mmmmmmmmmmmmmmmmmmmmmm");
    if (!token) {
        res.status(400).json({ message: 'you are not login' })
    } else {
        try {
            let user = jwt.verify(token, secretKey);
            req.user = user;
            next();
        } catch (err) {
            res.status(400).json({ auth: false, message: 'Failed to authenticate token.' ,err});
        }

    }
}

module.exports = { Createtoken, authenticate };