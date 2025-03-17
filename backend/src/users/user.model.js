const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate usernames
  },
  password: {
    type: String,
    required: true, // Password is required for all users
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Only allow these two roles
    reqired: true,
  },
});
// Pre-save middleware: hashes the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // If the password wasn't modified, skip hashing
  this.password = await bcrypt.hash(this.password, 10); // Hash the password with a salt round of 10
  next(); // Continue saving the documen
});

const User = mongoose.model("User", userSchema); // Create the User model from the schema

module.exports = User;
