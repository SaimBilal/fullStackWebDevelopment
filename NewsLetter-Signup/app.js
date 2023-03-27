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
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOWU4MzY3ODJjMGY1NDZmMjllNGM0YzU2NDRmM2ViZWZlNDNhY2RkNjBiMDY4MWRkYzZmMmM0NzBlMWViNDQ4NWFjYzYwOWJkMWU4NTM3ZmIiLCJpYXQiOjE2Nzk4NzE3NjQuMzgwODAxLCJuYmYiOjE2Nzk4NzE3NjQuMzgwODA1LCJleHAiOjQ4MzU1NDUzNjQuMzc2Mzc5LCJzdWIiOiI0MDg1MTMiLCJzY29wZXMiOltdfQ.TIjbncmKrSCORCBHodXxp27uD20YcsW__2FTEkfB12WYzQ68jr0PRCwmiaYuh6LRosezu_xsBo_18H69gU24BDClgBUvWgAMrpxi5dEjumcj1w1oCRQ6SWDaKMulAzyszDIomJY9GWh-qvgVNgZ5adijkZTvIeQXFqxHCmhc7uhh5kGPhzg9STD7baLRcWDEfWTFCin_66C1qS12GCUzizmiGWO8CCMRVpYA8k_xWS7I6E6kf-JHDenoTmWANFPRdZa2E1Hju2tw3azTPifpklyN3cnUzpf0nvRxoDZOPpjt2Nomt199YZB6M5g5Bz-i93lKDlvvS4XCXehL1zU0rBLyQX81P8jerZCLHelfMFaKsJtEZlXEtJnzo9NqU3k3b718BBqnMSr-aRo2aEG0PJFJIcZZGkZPdK4PCWAuWaDYRiaSCypPy1MFtVO3jc9ELpK367CTIYRnKuRgkjPq1w0JnvYOID1r_lIr2oOp-6LxPWJxz_SBvqp1LOMOU7CrNfuhFx0G2xCcup96U5LQ13rYALA79BVt0LS9aUaiIXdmW638NIvPycEOX3wZ2V3JyjWRWDM3lcJ9_ppj-OoatxmjOOpQ0zfp23qs_lmeHobkjbfI1ok9AMmT9DoJgPRig4QKCWKGZr56Tw2ZY1CNXa8MsuOVT9wvSeZPSd0nViw"
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

