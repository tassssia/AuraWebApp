var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    res.render("home/");
});

router.get("/home", function(req, res){
    res.render("home/home");
});

router.get("/about", function(req, res){
    res.render("home/about");
});

router.get("/coaches", function(req, res){
    res.render("home/coaches");
});

router.get("/price", function(req, res){
    res.render("home/price");
});

router.get("/rules", function(req, res){
    res.render("home/rules");
});

router.get("/login", function(req, res){
    res.render("home/login");
});

router.get("/signup", function(req, res){
    res.render("home/signup");
});

module.exports = router;