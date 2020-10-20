var http = require("http");
var express = require("express");
var path = require("path");
var app = express();
var server = http.createServer(app);
var port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.render('login');
})

app.get("/main", function(req, res){
    res.render("main");
})

app.post("/main", function(req, res){
    const id = req.body.id;
    const pass = req.body.password;
    console.log("id =", id , "pass = ", pass);
    res.render("main");
})

app.get("/signup", function(req, res){
    res.render("signup");
})

app.post("/submit", function(req, res){
    const id = req.body.id;
    const pass = req.body.password;
    console.log("id =", id , "pass = ", pass);
    res.redirect("/");
})

app.get("/charge", function(req, res){
    res.render("charge");
})

app.get("/charge_confirm", function(req, res){
    res.render("charge_confirm");
})

app.get("/charge_confirm2", function(req, res){
    res.render("charge_confirm2");
})

app.get("/exchange", function(req, res){
    res.render("exchange");
})

app.get("/exchange_confirm", function(req, res){
    res.render("exchange_confirm");
})

app.get("/exchange_confirm2", function(req, res){
    res.render("exchange_confirm2");
})

app.get("/payment", function(req, res){
    res.render("payment")
})
app.post("/payment", function(req, res){
    const id = req.body.id;
    const pass = req.body.password;
    const cost = req.body.cost;
    console.log("id = ", id , "pass = ", pass, "cost = ", cost);
    res.render("main");
})

server.listen(port, function () {
    console.log("server start", port);
  });
  