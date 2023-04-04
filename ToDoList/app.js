const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["Wake Up", "Eat", "Shit"];
var workItems = [];

app.get("/", function (req, res) {

    currentDate = date.getDate();

    res.render("list", {
        heading: currentDate,
        TodoList: items
    });
});

app.get("/work", function (req, res){
    res.render("list", {
        heading: "Work",
        TodoList: workItems
    });
});

app.post("/", function (req, res) {

    if (req.body.list == "Work") {
        workItems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        items.push(req.body.newItem);
        res.redirect("/");    
    }
});

app.listen(3000, function () {
    console.log("Server is running on ::3000");
});