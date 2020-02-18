const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema ({
    
    type: {
        type: String,
        trim: true,
        required: "Type of exercise is required."
    },

    name: {
        type: String,
        trim: true,
        required: "Name of exercise is required."
    },

    duration: {
        type: Number,
        required: "Duration (minutes) of exercise is required."
    },

    // following not required because depending on exercise may not be applicable
    weight: {
        type: Number,
    },

    distance: {
        type: Number,
    },

    reps: {
        type: Number,
    },

    sets: {
        type: Number,
    }

});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;