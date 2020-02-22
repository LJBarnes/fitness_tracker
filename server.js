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

// mongoose.connect("mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })


// API ROUTES

// create workout (app.post)
app.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
  .then(workouts => res.json(workouts))
  }); 

// get workouts in range (app.get)
app.get("/api/workouts/range", (req, res) =>{
  db.Workout.find()
  .then(workouts => res.json(workouts))
  .catch(err=> res.json(err))
});


// add exercise (app.put)
app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body} })
  .then(workouts => res.json(workouts))
  .catch(err=> res.json(err))
})


// get last workout (app.get)***
app.get("/api/workouts", (req, res) => {
  db.Workout.find()
  .then(workouts => res.json(workouts))
  .catch(err=> res.json(err))
});


// HTML ROUTES

// exercise.html
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

// index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// stats.html
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}!`);
  });
  
