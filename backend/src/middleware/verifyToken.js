const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Middleware function to verify the JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get the token from the Authorization header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided" });
  }
  // Verify the token with the secret key
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid credientials" }); // If verification fails, return 403 Forbidden
    }
    req.user = user; // Attach the decoded user payload to the request object
    next(); // Pass control to the next middleware/route
  });
};

module.exports = verifyToken;
