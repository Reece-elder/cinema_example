const router = require('express').Router();

const { Movie } = require('../models/movies');

// demo request
router.get('/movie', (req, res) => {
    console.log("Hey, im a route!!");
    res.send("Hey, this is from the route!")
})

router.post("/create", (req, res, next) => {
    // console.log(req);

    const record = new Movie(req.body);
    console.log(req.body);
    record.id = 5;

    record.save().then((result) => {
        res.status(201).send(`${result.id} has been added!`)
    }).catch((error) => {
        return next(error);
    });

});

router.get("/getAll", (req, res, next) => {
    Movie.find((error, movies) => {
        if(error) {
            console.log("Cant get movies");
            next(error);
        } else {
            res.send(movies);
        };
    });
});

module.exports = router;