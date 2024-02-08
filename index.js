//import env  load env to process.env
require('dotenv').config()


//to create server we need express
const express = require('express')

//import cors
const cors = require('cors')

//import mongoose
 require('./DB/connections')

//import router /2
const router = require('./Routes/router')

//create server
const blogserver=express()

//using cors
blogserver.use(cors())


//parse json to javascript
blogserver.use(express.json())

//server use router
blogserver.use(router)

blogserver.use('/uploads',express.static('./uploads'))

//custom the port
const PORT = 5000 || process.env.PORT

//run server
blogserver.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY IN PORT NUMBER ${PORT}`);
})

