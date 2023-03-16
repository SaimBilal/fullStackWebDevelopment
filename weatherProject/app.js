const express = require("express");
const https = require("https"); 
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

    res.send("You are at " + req.url);
});

app.get("/byCity", function(req, res){
    res.sendFile(__dirname + "/byCity.html");
});

app.post("/byCity", function (req, res) {

    let city = req.body.cityName;

    let urlEndpointWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=763a562030840c8bcb895cb030d047f4&units=metric";

    https.get(urlEndpointWeatherAPI, function (httpResponse) {
        console.log(httpResponse.statusCode + "\n");
 
         httpResponse.on("data", function(data) {
             let weatherApiJsonObj = JSON.parse(data);
             let cityTemp = weatherApiJsonObj.main.temp;
             let cityName = weatherApiJsonObj.name;
             let weatherDescription = weatherApiJsonObj.weather[0].description;
             let imgUrl = weatherApiJsonObj.weather[0].icon;
             let imgTag = "<img src=https://openweathermap.org/img/wn/" + imgUrl + "@2x.png>";
             res.write("<h1> The temprature in " + cityName + " is " + cityTemp + " degrees : " + weatherDescription + "</h1>");
             res.write(imgTag);
             res.send();
         });
 
     });
});

app.listen(3000, function() {
    console.log("Listening on ::3000 for the Weather App");
});

