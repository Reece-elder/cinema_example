const router = require('express').Router();

const movie = require("../models/movies");

// demo request
router.get('/movie', (req, res) => {
    console.log("Hey, im a route!!");
    res.send("Hey, this is from the route!")
})

module.exports = router;