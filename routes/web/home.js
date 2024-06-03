var express = require("express");
var passport = require("passport");

var User = require("../../models/user");

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

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/home");
 });
 
 router.post("/login", passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
 }));

router.get("/signup", function(req, res){
    res.render("home/signup");
});


router.post("/signup", async function(req, res, next){
    try {
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        
        const user = await User.findOne({ email: email });
        if (user) {
            req.flash("error", "There is already an account with this email");
            return res.redirect("/signup");
        }

        var newUser = new User({
            username: username,
            password: password,
            email: email
        });

        await newUser.save();
        next();
    } catch (err) {
        return next(err);
    }
}, passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
}));

module.exports = router;