
//import model
const users = require('../models/userSchema')

//jwt
const jwt = require('jsonwebtoken')



//logic for register
exports.register = async (req, res) => {


    console.log('inside usercontroler register logic');

    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })

        if (existingUser) {
            res.status(406).json('Account Already Exist....Please Login')
        }
        else {

            const newUser = new users({
                username,
                email,
                password
            })

            await newUser.save()

            res.status(200).json(newUser)
        }

    } catch (err) {
        res.status(401).json('Register request Failed due to ', err)
    }

}

//logic for login
exports.login = async (req, res) => {

    console.log('inside login control');

    const {email,password}=req.body

    try {
        const existingUser = await users.findOne({ email,password })

        if (existingUser) {
       
            const token=jwt.sign({userId: existingUser._id},"thesecretekey1358")

            res.status(200).json({


                existingUser,token
            })
        }
        else {
            res.status(404).json('Invalid EmailId or Password')
        }
    }
    catch (err) {
        res.status(401).json('Login request failed due to', err)
    }


}

