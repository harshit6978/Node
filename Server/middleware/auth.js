const jwt = require('jsonwebtoken')
const secretKey = process.env.JWTSECRET;

const Createtoken = (data) => {
    return jwt.sign({ data }, secretKey)
}

const authenticate = (req, res) => {
    let token = req.cookies['token']
    console.log(token, "mmmmmmmmmmmmmmmmmmmmmm");
    if (!token) {
        res.status(400).json({ message: 'you are not login' })
    } else {
        try {
            let user = jwt.verify(token, secretKey);
            req.user = user;
            next();
        } catch (e) {
            res.status(403).send({ auth: false, message: 'Failed to authenticate token.' });
        }

    }
}

module.exports = { Createtoken, authenticate };