var express = require('express');   
var app = express();
app.use('/store',function (req, res, next) {
    console.log('You will be on store soon');
    next(); 
});
app.get('/store', function(req,res,next) {
    res.send('Welcome in store!');
});
app.get('/', function (req,res,next) {
   console.log('GET Request for home recieved');
   res.send('Hello GET!');
});
app.listen(3000);
app.use(function(req,res,next) {
    res.status(404).send('Sorry, we couldn\'t find what you were looking for');
});