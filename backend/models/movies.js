const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const movieSchema = new Schema({

    id: {
        type: Number,
        required: true
    }, 
    title: {
        type: String,
        required: true
    }, 
    director: {
        type: String,
        required: true
    }, 
    genre: {
        type: String, 
        required: true
    }, 
    runtime: {
        type: Number,
        required: true
    }

});

const Movie = model('Movie', movieSchema);

module.exports = {
    "Movie": Movie
};