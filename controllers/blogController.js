
 const blog=require('../models/blogSchema')




//add ptoject

exports.addBlog= async(req,res)=>{

    console.log('inside addblog function');

    const userId=req.payload
    console.log(userId);
    
    const blogImage=req.file.filename

    const{title,author,description}=req.body

    try {

        const existingBlog= await blog.findOne({title})
        if(existingBlog){
            res.status(401).json('Author Already exists...Choose Another')
        }
        else{
             const newBlog = new blog({

                title,author,description,blogImage,userId
             }) 
             await newBlog.save()
             res.status(200).json(newBlog)
        }
        
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }


   
}

//gethomeblog
exports.getHomeBlog=async(req,res)=>{
  
    try {

        const homeBlog= await blog.find().limit(3)
        res.status(200).json(homeBlog)
        
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }

}

//getallblog


exports.getAllBlog=async(req,res)=>{

    const searchkey=req.query.search
    console.log(searchkey);

    const qry={
         
        title:{
            $regex:searchkey, $options:'i'
        }
    }

    try {
              const allBlog=await blog.find(qry)
              res.status(200).json(allBlog)
        
    } catch (err) {

        res.status(401).json(`request failed due to ${err}`)
    }
}

//getuserblog

exports.getUserBlog=async(req,res)=>{
   const userId=req.payload

    try {
              const userBlog=await blog.find({userId})
              res.status(200).json(userBlog)
        
    } catch (err) {

        res.status(401).json(`request failed due to ${err}`)
    }
}


exports.editUserBook= async(req,res)=>{

    const {id}=req.params
    const userId= req.payload
    const{title,author,description,blogImage}=req.body
    const uploadImage=req.file?req.file.filename:blogImage


    try {

        const updateBook=await blog.findByIdAndUpdate({_id:id},{title,author,description,blogImage:uploadImage,userId},{new:true})

        await updateBook.save()
        res.status(200).json(updateBook)
        
    } catch (err) {
        res.status(401).json(err)
    }


}


//deleteBook
exports.deleteBook=async(req,res)=>{
    const {id}=req.params
    

    try {
        const removeBook=await blog.findByIdAndDelete({_id:id})
        res.status(200).json(removeBook)
        
    } catch (err) {
        
        res.status(401).json(err)
    }
}