const express = require('express')
const { get } = require('https')
var app = express()

app.get('/form',function(req,res){
    res.sendFile(__dirname+"/form.html")
})
var bodyparser=require("body-parser")
var urlEncoded=bodyparser.urlencoded({extended:false})

app.post('/submitform',urlEncoded,function(req,res){
    res.send("data submited"+req.body.email+req.body.password)
   
})
var server =app.listen(1000,function()

{
    var host =server.address().address
    var port =server.address().port
})

