var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    res.json("*json status for the users api*");
});

module.exports = router;