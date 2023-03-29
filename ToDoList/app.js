const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["Wake Up", "Eat", "Shit"];

app.get("/", function (req, res) {
    let date = new Date();
    let currentDate = date.toLocaleDateString("en-UK", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    res.render("list", {
        dayString: currentDate,
        TodoList: items
    });
});

app.post("/", function (req, res) {
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server is running on ::3000");
});