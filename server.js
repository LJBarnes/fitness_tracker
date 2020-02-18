const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

// API ROUTES

// create workout database

// create workout (app.post)

// get workouts in range (app.get)

// add exercise (app.put)

// get last workout (app.get)


// HTML ROUTES

// exercise.html

// index.html

// stats.html

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}!`);
  });
  
