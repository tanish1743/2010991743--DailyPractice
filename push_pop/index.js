var express = require("express")
const app = express();
app.set("view engine","ejs")


app.get("/",(req,res)=>{
    // var n = "Tanish Jindal";
    var n = "Sunday";
    res.render("index",{
        Text:n
    });
})









app.listen(3000);