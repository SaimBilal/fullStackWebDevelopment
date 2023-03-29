const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/signup", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
    console.log("You are at: " + req.url);
});

app.post("/signup", function (req, res) {

    var firstName = req.body.first_Name;
    var lastName = req.body.last_Name;
    var mail = req.body.email_Address;

    console.log(firstName, lastName, mail);

    const url = "https://connect.mailerlite.com/api/subscribers";

    const ops = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer <API KEY>"
        },
        method: "POST",
    }

    var data = {
        email: mail,
        fields: {
            name: firstName,
            last_name: lastName
        }
    }

    const dataJSON = JSON.stringify(data);

    const request = https.request(url, ops, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        });

        let postSuccess = response.statusCode;
        if (postSuccess === 201) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
    });

    request.write(dataJSON);
    request.end();
});

app.post("/failure", function(req, res){
    res.redirect("/signup");
});

app.listen(3000, function () {
    console.log("Server is running on ::3000");
});

