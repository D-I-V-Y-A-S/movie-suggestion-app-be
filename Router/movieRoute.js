const express=require ("express")
const router=express.Router()

const {getMovies,addMovies}=require('../Controller/movieController')
const {getMoviesOnGenre}=require('../Controller/validateController')

router.route('/').get(getMovies).post(addMovies)
router.route('/validate').post(getMoviesOnGenre)

module.exports=router