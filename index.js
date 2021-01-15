var express = require("express");
const {
    response
} = require("express");
const {
    render
} = require("ejs");
var app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/factorialCalculator", function(req, res) {
    res.render("factorialCalculator");
});

app.get("/fibonacci", function(req, res) {
    res.render("fibonacci");
});

app.get("/palindrome", function(req, res) {
    res.render("palindrome");
});


app.listen(port, () => console.log("DD AD FactorialCalc Server Started"));