const express = require("express");
const dbConfig = require("./dbConfig");
const app = express();
// Making .env functional
require("dotenv").config();
app.use(express.json());

// Calling dbConfig
dbConfig();

app.listen("8000", console.log("Server is running 🏃‍♂️"));
