// const express = require("express");

const { create } = require("../controllers/authControllers");

// const _ = express.Router()
const _ = require("express").Router();

_.post("/create", create);

module.exports = _;
