const { on } = require("events");
var express = require("express");
var app = express();
const https=require("https");

app.get("/",(req,res)=>{
    https.get("https://api.kanye.rest/",(response)=>{
    console.log(response.statusCode);
    response.on("data",(d)=>{
        var final_data=JSON.parse(d);
        console.log(final_data.quote);
        res.send("<h1>"+final_data.quote+"</h1>")
        // console.log(d);
       
    })
    });
    // res.send("Hello")
    
});

app.listen(3060,(req,res)=>{
    console.log("Server is running on port 3060")
})