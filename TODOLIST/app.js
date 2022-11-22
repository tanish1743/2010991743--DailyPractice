const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];
let NewTasks = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){
    let day = new Date().toLocaleDateString('en-uk', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    res.render("list",{
        listTitle: day, newListItems: items
        });
    });

app.post("/", function(req, res){
    let item = req.body.input;
    if(req.body.submit === 'Task'){
        NewTasks.push(item);
        res.redirect("/");
    }else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/", function(req,res){
    res.render("list", {listTitle:"Task", newListItems: NewTasks});
});

app.post("/",function(req, res){
    let item = req.body.input;
    NewTasks.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running on 3000");
})