const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Advice, when most needed, is least heeded.",
					 "Every wise man started out by asking many questions.",
					 "Feeding a cow with roses does not get extra appreciation.",
           "How many of you believe in psycho-kinesis? Raise my hand.",
           "Success is a journey, not a destination."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

// Goals

let goalsArr = []

app.post("/api/goals", (req, res) => {
  let goal = req.body.goal
  goalsArr.push(goal)
  res.status(200).send(goalsArr)
})

app.delete("/api/goals", (req, res) => {
  goalsArr.pop()
  res.status(200).send(goalsArr)
})

app.put("/api/goals", (req, res) => {
  let goal = req.body.goal
  goalsArr.splice(goalsArr.length-1, 1, goal)
  res.status(200).send(goalsArr)
})

app.listen(4000, () => console.log("Server running on 4000"));

//Inspirational movies

let movies = [
{
  title: "Good Will Hunting",
  rating: "9",
}
, 
{
  title: "Braveheart",
  rating: "10"
},
{
  title: "Moana",
  rating: "10"
}]

app.get("/api/movies", (req, res) => {
  
  res.status(200).send(movies);
  
});

let dogs = [{
  breed: "dauchshund",
  url: "https://www.thesprucepets.com/thmb/10AshHtXtOKXblvXMnGGPsZ05wA=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/breed-profile-dachshund-1117959-hero-2871a48a9ebf4ab1a19427a8bfd3f1b6.jpeg"
},
{
  breed: "shihTzu",
  url: "https://animalcorner.org/wp-content/uploads/2020/04/Maltese-Shih-Tzu-2-1024x683.jpg"
},
{
  breed: "labrador",
  url: "https://i.guim.co.uk/img/media/177f871940f3dabc5eb4b80020ec40a75648da99/0_176_4737_2840/master/4737.jpg?width=700&quality=85&auto=format&fit=max&s=92859ed3133696198894ba58612eea85"
}]

app.get("/api/dogs", (req, res) => {
  res.status(200).send(dogs)
})