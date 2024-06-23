const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const app = express();
app.use(express.json())
app.use('/auth',auth)
// connection to mongodb and start server
 mongoose.connect("mongodb+srv://hamzahammamicontact:atcsCdlEaXNH6igo@cluster0.6tywufi.mongodb.net/blog").then((()=>
 {
    console.log('connected to Mongodb')
 app.listen(4000,()=>{
    console.log('server working ')
 })
 }
)).catch((err)=>{
    console.error('error connecting to Mongodb', err.message)
})