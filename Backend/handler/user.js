const user = require('../database/user')
const jwt = require("jsonwebtoken")
const SECRET = require("../constants/index")


async function registerUser ( req,res ) {
    let { userbody } = req.body
    console.log(userbody)

    let existingUser = await user.findOne({
        email:userbody.email
    })
    console.log(existingUser)
    if(existingUser){
        return res.status(500).send({
            message:"Bad Request User already exists"
        })
    }
    let userDoc = await user.create(userbody)
    return res.send({
        data : userDoc
    })
}
async function loginUser ( req,res ){
    let { email,password } =  req.body

    let existingUser = await user.findOne({
        email:email
    },{
        password: 1,
        _id: 1,
        email: 1,
        name: 1,
    })

    if(existingUser){
        if(existingUser.password == password){
        let encrypted_Token = jwt.sign({
            id:existingUser._id,
            email:existingUser.email,
            name:existingUser.name
        },SECRET)
        return res.send({
            data:{
                token:encrypted_Token
            }
        })
        }else{
            error:"Password Does not match"
        }

       
    }else{
        return res.status(404).send({
            error:"User was not found "
        })
    }
}


module.exports = {
    registerUser,
    loginUser
}