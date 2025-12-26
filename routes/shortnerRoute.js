const _ = require("express").Router();

_.get("/shortner", function (req, res) {
  res.send("URL shortner was supposed to be here");
});

module.exports = _;
