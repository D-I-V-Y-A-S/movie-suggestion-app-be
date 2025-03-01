const mongoose=require('mongoose')

const movieSchema=new mongoose.Schema({
    movieName:{
        type:String,
        required:true,
        unique:true
    },movieYear:{
        type:String,
        required:true
    },movieGenre1:{
        type:String,
        required:true,
        enum:['Action', 'Comedy','Drama','SciFi','Horror','Thriller','Romance','Fantasy','Animation','Adventure','Crime', 'Biography']
    },movieGenre2:{
        type:String,
        required:true,
        enum:['Action', 'Comedy','Drama','SciFi','Horror','Thriller','Romance','Fantasy','Animation','Adventure','Crime', 'Biography']
    },imdbRating:{
        type:Number,
        required:true
    }
},{collection:'movies'})

module.exports=mongoose.model('movies',movieSchema)

