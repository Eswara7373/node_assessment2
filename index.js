const express=require("express");

const app=express();

app.get('/api/main',function(req,res){
    
    res.send("This is the route of API and Main")

}).listen(5000)