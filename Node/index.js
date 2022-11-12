const { response } = require('express')
var express =require('express')
var app = express()
app.get("/" , (require,response)=>{
    response.send("Test");
});
app.get("/about" , (require,response)=>{
    response.sendFile(__dirname+"/about.html");
});
app.get("/home" , (require,response)=>{
    response.sendFile(__dirname+"/home.html");
});
app.get("/blog" , (require,response)=>{
    response.sendFile(__dirname+"/blog.html");
});
app.get("/contact" , (require,response)=>{
    response.sendFile(__dirname+"/contact.html");
});
app.listen(3060,()=>{
    console.log("http://localhost:3060/")
})

