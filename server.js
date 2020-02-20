const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

// API ROUTES

// create workout (app.post)
app.post("/api/workouts", ({body}, res) => {
  db.create(body)
  .then(workouts => res.json(workouts))
  }); 

// get workouts in range (app.get)
app.get("/api/workouts/range", (req, res) =>{
  db.find()
  .then(workouts => res.json(workouts))
  .catch(err=> res.json(err))
});


// add exercise (app.put)


// get last workout (app.get)


// HTML ROUTES

// exercise.html
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/exercise.html"));
});

// index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

// stats.html
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/stats.html"));
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}!`);
  });
  
