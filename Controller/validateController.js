const movieModel = require('../Model/movieModel')

const getMoviesOnGenre = async(request, response) => {
    try {
        const choosedGenre = request.body
        const selectMoviesOnGenre = await movieModel.find(
            {$or:
                [
                    { movieGenre1: choosedGenre.movieGenre1 ,movieGenre2: choosedGenre.movieGenre2 },{ movieGenre1: choosedGenre.movieGenre2 ,movieGenre2: choosedGenre.movieGenre1}
                ]
            }
        )
        if (selectMoviesOnGenre.length>0) {
            return response.status(200).send(selectMoviesOnGenre)
        }
        response.status(409).send({ message: "Movie on specified genre is not available!" })
    }
    catch (error) {
        response.status(500).send({ message: error.message })
    }
}

module.exports = { getMoviesOnGenre }