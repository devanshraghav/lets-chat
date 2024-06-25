// Imports
const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRouter");

dotenv.config();

connectDB();
const app = express();
app.use(express.json()); // to parse incoming JSON data.

app.get("/", (req, res) => {
  res.send("API is running");
});

// Using Router
app.use("/api/chat", userRoutes);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id == req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is up and running on port ${PORT}`.yellow.bold)
);
