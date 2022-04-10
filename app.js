const bodyParser = require("body-parser");
const express = require("express");
const { get } = require("http");
const app = express();

var activities = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3000, function(){
    console.log("Connected to port 3000");
});

var date = new Date();
var options = {weekday: 'long', month: "long", day: "numeric"};

var today = date.toLocaleDateString("en-US", options);

app.get("/", function (req, resp){
    resp.render("index", {weekday: today, activities: activities});
});

app.post("/", function (req, resp){
    var activity = req.body.txtActivity;

    if(activity != ""){
        activities.push(activity);
        console.log(activity);
    }  
    resp.redirect("/");
});
