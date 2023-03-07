const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    console.log("Currently in " + __dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    let num1 = Number(req.body.firstNumber);
    let num2 = Number(req.body.secondNumber);

    res.send("Der Summe " + num1 + " + " + num2 + " ist gleich: " + (num1 + num2));    
});

app.listen(3000, function() {
    console.log("Listening on ::3000");
});

