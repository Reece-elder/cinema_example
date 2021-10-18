const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/test', (req, res) => {
    res.send("Hey this is the text!");
    return console.log("Site has been accessed!");
})


mongoose.connect('mongodb://localhost:27017/demo_cinema', {
    useNewUrlParser: true
}).then(() => {
    console.log("Database connected!");
}).catch((error) => {
    console.log("Database cant be connected :( ", error);
});

const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
})

// Exporting the app
module.exports = server