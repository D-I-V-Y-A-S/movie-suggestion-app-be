require('dotenv').config()            //dev dependency 
const mongoose=require('mongoose')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500

const cors = require('cors')                               //cross origin resource sharing for accessing resource from another domain.
const movieRoute = require('./Router/movieRoute')

// app.use(cors({origin:'http://localhost:5173'}))
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
res.status(200).send("Api connected Successfully!")
})

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully'))

app.use('/api/v1/movie', movieRoute)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(PORT,console.log(`Server started running on http://localhost:${PORT}/api/v1/movie`))