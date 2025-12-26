const userSchema = require("../models/userSchema");
const { isValidEmail, isValidPassword } = require("../utils/validationRegex");

const _ = require("express").Router();

const create = async function (req, res) {
  const { username, email, password } = req.body;

  //   Validation
  try {
    if (!username)
      return res.status(400).send({ message: "A username is required" });
    if (!email)
      return res.status(400).send({ message: "Need an email to proceed" });

    if (!isValidEmail)
      return res.status(400).send({ message: "Please enter a valid email" });

    if (!password)
      return res.status(400).send({ message: "Please provide a password" });
    res.send("Signing up");

    if (!isValidPassword)
      return res.status({
        message:
          "Password must have at least 1: uppercase, lowercase, digit, special character",
      });

    const existingUser = userSchema.findOne({ email });
    if (existingUser)
      return res.status(400).send({ message: "Email already is use" });

    //   After all the Validation
    const user = new userSchema({ username, email, password });
    user.save();
    res.status(200).send({ message: "Account successfully created!" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { create };
