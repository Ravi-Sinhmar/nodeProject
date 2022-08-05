//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");

});
app.post("/", function(req, res) {
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    res.write("<h1> Thanks... </h1>");
    res.write("<h1> This response is not going anywhere so Chill</h1>");


    res.write("<h3 > Your First Name is " + firstname + "</h3>");
    res.write("<h3> Your Last Name is " + lastname + "</h3>");

    res.write("<h3> Your Email is " + email + "</h3>");
    res.send();


})



app.listen(3000, function() {

});
