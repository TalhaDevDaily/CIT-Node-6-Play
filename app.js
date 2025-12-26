const express = require("express");
const dbConfig = require("./dbConfig");
const _ = require("./routes");
const app = express();
// Making .env functional
require("dotenv").config();
app.use(express.json());

// Calling dbConfig
dbConfig();

// Routing
app.use(_);

app.listen("8000", console.log("Server is running 🏃‍♂️"));
