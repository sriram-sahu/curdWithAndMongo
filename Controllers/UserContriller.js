const User =  require('../Models/UserModal')
const bcrypt =  require('bcrypt')
const jwt  = require('jsonwebtoken')
const RegisterUser = async(req,res) =>{
    const {username,email,password} = req.body 
    if(!username || !email || !password) {
        res.status(400)
        throw new Error ("All fields are Mandatory")
    }
    const userAvailbility  = await User.findOne({email})
    if(userAvailbility){
        res.status(400)
        throw new Error ("User Already Registered")

    }
    const hashedPassword =  await bcrypt.hash(password,10) 
    const NewUser =  new User({
        username,email,password:hashedPassword
    })
    // await NewUser.save()
    return res.send(await User.find())
    // res.json({message:"User Registred Successfully"})
}

const LoginUser = async(req,res) =>{
    const{email,password}  = req.body
    if(!email || !password){
        res.status(400);
        throw new Error ("All fields are Mandatory")
    }
    
    const user  = await User.findOne({email})
    if(user && await bcrypt.compare(password,user.password)){
        const accessToken  = jwt.sign({
            user:{
                username:user.username,
                password:user.password,
                id:user.id
            },
        }, "chowdeswari",
        {expiresIn:"10m"} )
       res.status(201).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error("Email or password is not matched")
    }
    // res.json({message:"User Login Successfully"})
}

const CurrentUser = async (req,res) =>{
    res.json({message:"This is Current Information"})
}
module.exports = {RegisterUser,LoginUser,CurrentUser}