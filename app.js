const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Vendor = require("./models/vendor");

const dotenv = require("dotenv");
const cors = require("cors");

// environment variable configuration
dotenv.config();

// parsing the receiving json/data
app.use(express.json());

// console.log(process.env.MONGO_URI);

// Making connection to the mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Allowing request from different origins
app.use(
  cors({
    origin: "*",
    method: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Making a fetch/get request
app.get("/", async (req, res) => {
  res.send("hello");
});

// Listening to the server
app.listen(3001, () => console.log("listening"));

// Exporting the app
module.exports = app;
