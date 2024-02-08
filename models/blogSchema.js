

const mongoose=require('mongoose')


const blogSchema=new mongoose.Schema({

    title:{
        type:String,
        require:true

    },
    author:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    blogImage:{
       type:String,
       require:true
    },
    userId:{
        type:String,
        require:true
    }
})





const blogs=mongoose.model("blogs",blogSchema)

module.exports=blogs



