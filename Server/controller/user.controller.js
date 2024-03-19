const { Createtoken } = require("../middleware/auth");
const { useService } = require("../service");




const userPost = async (req, res) => {
    try {
        const body = await useService.userPost(req.body);
        if (!body) {
            res.status(200).json({
                message: "user is not created"
            })
        }
        res.status(200).json({
            message: "user created",
            body
        })

    } catch (err) {
        res.status(400).json({
            message: "Error while creating the User",
            error: err.message
        })
    }
}

const login = async (req, res) => {
    try {


        let { email, password } = req.body
        console.log(email);
        console.log(password);

        let user = await useService.findUserByEmail(email)

        if (!user) {
            throw new Error("admin not found")
        } else {
            if (password === user.password) {
                console.log(user)
                let token = Createtoken(user)
                res.cookie("token", token, { httpOnly: true })
                res.status(200).json({
                    message: "login successfully", token, user
                })
            } else {
                throw new Error('password invalid')
            }
        }

    } catch (err) {
        res.status(500).json({ success: false, err: err.message })
    }

}

let getProfile = (req, res) => {
    try {
        let user = req.user

        if (user) {
            res.status(200).send(user)
        } else {
            res.status(401).send({ msg: "you are not logged in" })
        }
        res.status(200).json({ message: "profile get success", user })
    } catch (err) {
        res.status(400).json({
            message: 'failed to get profile',
            error: err.message
        })
    }
}

module.exports = { userPost, login, getProfile }