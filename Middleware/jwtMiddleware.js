

const jwt= require('jsonwebtoken')


const jwtMiddleware=(req,res,next)=>{
        
    console.log('inside jwt middleware');

    const token=req.headers['authorization'].split(' ')[1]
    console.log(token);
    try {

        const jwtresponse= jwt.verify(token,"thesecretekey1358")
        console.log(jwtresponse);
        req.payload=jwtresponse.userId
        next()
        
    } catch (err) {
        res.status(401).json("authorization failed..please login")
    }
   

}

module.exports=jwtMiddleware