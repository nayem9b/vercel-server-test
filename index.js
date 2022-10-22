const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const hotels = require("./Hotels.json");
app.get("/", (req, res) => {
  res.send("My server is running");
});
app.get("/hotels", (req, res) => {
  res.send(hotels);
});
app.get("/hotels/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const hotel = hotels.find((ht) => ht.id == id);
  console.log("id", id, hotel);
  res.send(hotel);
});
app.listen(port, () => {
  console.log(`You are running on port, ${port}`);
});
