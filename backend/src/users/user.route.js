const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();
// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET_KEY;
// POST route to authenticate admin users
router.post("/admin", async (req, res) => {
  const { username, password } = req.body; // Extract username and password from request body
  try {
    const admin = await User.findOne({ username }); // Find the user (admin) by username in the database
    if (!admin) {
      res.status(404).send({ message: "Admin not found!" });
    }
    if (admin.password !== password) {
      res.status(401).send({ message: "Invalid password!" });
    }
    // If the admin exists and password matches, generate a JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      JWT_SECRET, // Secret key to sign the token
      { expiresIn: "30min" } // Token expiration time
    );
    // Sends back the token and some user info to the client
    return res.status(200).json({
      message: "Authentication successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error);
    res.status(401).send({ message: "Failed to login as admin" });
  }
});

module.exports = router;
