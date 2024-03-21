const { movieService } = require("../service");


const CreateMovie = async (req, res) => {

    try {

        const { Name, actor, director, price } = req.body;
        console.log(req.body);

        if (!Name || !actor || !director || !price) {
            return res.status(400).json({ msg: "Please enter all fields" })
        }

        const movieData = { Name, actor, director, price };
        const data = await movieService.movieCreate(movieData)

        res.status(200).json({
            message: "movie added",
            data,
        })
    } catch (error) {
        console.log("Error in catch block", error);
        return res.status(500).send('Server Error');
    }


}

module.exports = { CreateMovie }