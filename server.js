require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const cors =require('cors')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.get('/', (req,res)=>{
  res.setHeader("Access-Control-Allow-Credentials","true");
})
// routes
app.use("/api/workouts",workoutRoutes)
app.use("/api/user",userRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
   // listen for requests
   app.listen(process.env.PORT, () => {
     console.log('listening on port', process.env.PORT)
   })
 })
 .catch((error) =>{
  console.log(error);
 })


