const movieModel = require('../Model/movieModel')
const data = require('../Data/initialData')

const getMovies = async (request, response) => {
    try {

        const movie = await movieModel.find()

        if (movie.length === 0) {
            const movieToAdd = await movieModel.insertMany(data)
            return response.status(201).json(movieToAdd)
        }

        const arrangeMovies=await movieModel.aggregate([{$sort:{movieYear:-1}}])
        response.status(200).json(arrangeMovies)

    }

    catch (error) {
        response.status(500).send({ message: error.message })
    }
}

const addMovies = async (request, response) => {
    try {
        const movieToBeAdded = request.body
        const isMovieAvailable = await movieModel.findOne({ movieName: movieToBeAdded.movieName })

        if (isMovieAvailable) {
            return response.status(409).send({ message: `${movieToBeAdded.movieName} already exists!` })
        }

        await movieModel.create(movieToBeAdded)
        response.status(201).send({ message: `${movieToBeAdded.movieName} added successfully!` })

    }
    
    catch (error) {
        response.status(500).send({ message: error.message })
    }
}


module.exports = { getMovies, addMovies }