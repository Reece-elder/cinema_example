const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send("Hey this is the text!");
    return console.log("Site has been accessed!");
})

const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
})

// Exporting the app
module.exports = server