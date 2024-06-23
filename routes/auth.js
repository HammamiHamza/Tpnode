const express = require('express')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const router = express.Router()

// register
router.post('/register',async (req,res)=>{
    try{

        const {username,password}= req.body;
        const user = new User ({username,password})
        await user.save()
        res.status(201).send('user registred successfully')
    }catch(error){
        res.status(400).send(error.message)

    }
})
 router.post('/login', async(req,res)=>{
    try{
    const {username,password}= req.body;
    const user = await User.findOne({username: username})

    if (!user){
        return res.status (404).send('user not found')   }
        console.log(user.password)

        const isPasswordMatch= await bcrypt.compare(password,user.password)
       if(!isPasswordMatch){
        return res.status (404).send('verification failed user not found') 
       }
       const token = jwt.sign({id:user._id}, "nodejsexpress")
       console.log(token)
       return res.send({token:token})
    }
    catch(error){
        res.status(400).send(error.message)
    }
})
module.exports=router