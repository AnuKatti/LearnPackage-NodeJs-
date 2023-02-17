let express = require('express');
let app = express();      //obj of express
let port = 6600

app.get('/',(req,res)=> {
    res.send('Hi from Express')
})

app.get('/location',(req,res)=> {
    res.send('Hi from Location')
})

app.listen(port,(err)=>{
    console.log('Server is running on port '+port)
})
 
