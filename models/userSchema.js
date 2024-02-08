

const mongoose=require('mongoose')

//import validator
const validator =require('validator')


//create schema using schema class in mongoose
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:['3','must be atleast 3 character,got only {value}']

    },

    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
      
    },
    password:{
                 
        type:String,
        require:true
    }
})










//create model
const users = mongoose.model('users',userSchema)

module.exports = users