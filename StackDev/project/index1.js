const { appendFile } = require("fs");
const https=require("https");
const { dirname } = require("path");
const bodyParser=require('body-parser');
var express=require("express");
var app=express();

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/form.html");

})
app.use (bodyParser.urlencoded({ extended: true})) ;
app.post("/api",(req,res)=>{
    console.log(req.body);
var a=req.body.n1;
var b=req.body.n2;
var c=Number(a)+Number(b);
var final_data={
    statusCode:200,
    ans:c
}
res.send(final_data);
})
app.get("/data",(req,res)=>{
console.log(final_data);
})
app.listen(3040,(req,res)=>{
    console.log("Server is running on port 3040")
});