// path to resolve client request.

//import express
const express = require('express')

//import usercontroler

const userController = require('../controllers/userController')

//blog controller
const blogController=require('../controllers/blogController')

//multer
const multerConfig=require('../Middleware/multerMiddleware')


const jwtMiddleware=require('../Middleware/jwtMiddleware')


//create an object for  the class router in express

const router=new express.Router()




//Path for resolving the request

//registeration
router.post('/user/register',userController.register)



//login
router.post('/user/login',userController.login)


//add blog
router.post('/blog/add',jwtMiddleware,multerConfig.single('blogImage'),blogController.addBlog)

//gethomeblog
router.get('/blog/homeblog',blogController.getHomeBlog)

//getallblog
router.get('/blog/allblog',jwtMiddleware,blogController.getAllBlog)


//getallblog
router.get('/blog/userblog',jwtMiddleware,blogController.getUserBlog)


//editbook
router.put('/book/edit/:id',jwtMiddleware,multerConfig.single('blogImage'),blogController.editUserBook)


///deletebook
router.delete('/book/delete/:id',jwtMiddleware,blogController.deleteBook)


//EXPORT ROUTER
module.exports=router
