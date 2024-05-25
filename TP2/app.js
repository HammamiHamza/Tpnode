const express = require('express');
const app = express();
const port = 5000;
const auth = require('./routes/auth') 
const voiture = require('./routes/voiture') 
app.use('/voiture',voiture)
app.use(express.json()); // Pour parser le JSON des requêtes


app.listen(5000,()=>{
    console.log('listening on port 5000')
})

