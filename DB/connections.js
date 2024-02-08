//import mongoose

const mongoose = require('mongoose')

//connection string of mongoose

const connectionString = process.env.DATABASE

//connect to mongodb using mongoose
mongoose.connect(connectionString).then((res)=>{
    console.log('mongodb connected succesfully');
}).catch((err)=>{
    console.log(`mongodb connection failed due to :${err}`);
})