const { Createtoken } = require("../middleware/auth");
const { useService } = require("../service");
const cloudinary = require('cloudinary')



cloudinary.config({
    cloud_name: "dhshpy5fh",
    api_key: "674579777977227",
    api_secret: "vPsxjCZnKbIu1gHGXiuEnv_nVwY",
})




const userPost = async (req, res) => {
    try {

        const { email, password, mobile} = req.body;

        let profileImage ;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            profileImage = result.secure_url;
            
        }
        console.log(req.file,"iiiiiii");

        const userData = { email, password, mobile, profileImage };
        const body = await useService.userPost(userData);

        console.log(req.body);


        // const body = await useService.userPost(req.body);
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


const uploadProfileImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const result = await cloudinary.uploader.upload(req.file.path);


        req.user.profileImage = result.secure_url; // Assuming you have a profileImage field in your user schema

        // Save the user with the updated profile image URL
        await req.user.save();

        return res.status(200).json({ message: "Profile image uploaded successfully", imageUrl: result.secure_url });
    } catch (error) {
        return res.status(500).json({ message: "Failed to upload profile image", error: error.message });
    }
};

module.exports = { userPost, login, getProfile, uploadProfileImage }