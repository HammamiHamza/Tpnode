// create model of user document
const mongoose = require('mongoose')
const bcrypt= require('bcryptjs')
const userSchema = new mongoose.Schema({
    username:{type:String,unique:true},
    password:String
})
userSchema.pre('save', async function(next){
    const User =this;
    if(User.isModified('password')){
        User.password= await bcrypt.hash(User.password,10)
    }
})
const User = mongoose.model('User',userSchema)
module.exports = User;