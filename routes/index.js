const _ = require("express").Router();
const authRoute = require("./authRoute");
const shortnerRoute = require("./shortnerRoute");

_.get("/", function (req, res) {
  res
    .status(200)
    .send(
      "Oh, what a beautiful morning, oh what a beautiful day, I've got a beautiful feeling, everything's going my way! 🌅"
    );
});

// Authentication Router
_.use("/auth", authRoute);

// URL Shortner Router
_.use("/url", shortnerRoute);

_.use(function (req, res) {
  res.status(400).send("404, page not found");
});

module.exports = _;
