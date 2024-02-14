var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index");
});
router.get("/index", function(req, res, next) {
    res.render("index");
});
router.get("/design", function(req, res, next) {
    res.render("design");
});
router.get("/kitchen", function(req, res, next) {
    res.render("kitchen");
});
router.get("/badroom", function(req, res, next) {
    res.render("badroom");
});
router.get("/livingroom", function(req, res, next) {
    res.render("livingroom");
});
router.get("/bathroom", function(req, res, next) {
    res.render("bathroom");
});
router.get("/diningroom", function(req, res, next) {
    res.render("diningroom");
});
router.get("/Wardrobe", function(req, res, next) {
    res.render("Wardrobe");
});
router.get("/about", function(req, res, next) {
    res.render("about");
});

module.exports = router;