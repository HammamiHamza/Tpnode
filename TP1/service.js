const express= require('express');
const app=express();
const port = 5000;
const auth = require('./routes/auth') 

app.use('/auth',auth) 
//auth/login return message with html
//auth/register return page html
// post/all return un array of object 
//post/:id return the object with the id in the url


app.get('/auth/login', (req, res) => {
    res.json({status: 200, message: '<h1>server working fine</h1>'});
});


app.get('/auth/register', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
const data = [
    { id: 1, name: 'yassine', value: 'king' },
    { id: 2, name: 'hamza', value: 'ntas' },
    { id: 3, name: 'Saber', value: 'ok' },
  ];
  app.get('/post/all', (req, res) => {
    res.json(data);
  });
  
  app.get('/post/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const obj = data.find(o => o.id === id);
  
    if (obj) {
      res.json(obj);
    } else {
      res.status(404).json({ message: 'Object not found' });
    }
  });



app.listen(5000,()=>{
    console.log('listening on port 5000')
})


