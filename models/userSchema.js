const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified(password)) return next();

  try {
    user.password = 
  } catch (error) {
    
  }
});

module.exports = mongoose.model("user", userSchema);
