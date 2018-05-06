var express = require('express');   
var app = express();
app.use('/store',function (req, res, next) {
    console.log('You will be on store soon');
    next(); 
});
app.get('/store', function(req,rest,next) {
    res.send('Welcome in store!');
});
app.get('/', function (req,res,next) {
   console.log('GET Request for home recieved');
   res.send('Hello GET!');
});
app.post('/', function (req,res) {
    console.log('POST Request recieved')
    res.send('Hello POST!');
});
app.delete('/del_user',function (req,res) {
   console.log('DELETE user request recieved');
   res.send('Hello delete!'); 
});
app.get('/list_user', function (req,res) {
    console.log('Request GET for list user recieved');
    res.send('Here will be user list');
});
app.get('/ab*cd', function (req,res) {
   console.log('Request GET for /ab*cd recieved');
   res.send("Pattern match"); 
});
app.listen(3000);
app.use(function(req,res,next) {
    res.status(404).send('Sorry, we couldn\'t find what you were looking for');
});