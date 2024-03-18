const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Ka beta Kaise ho");
});

app.listen(3000,function(){
    console.log("Hello Bsdk");
});