require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server Running!");
});
