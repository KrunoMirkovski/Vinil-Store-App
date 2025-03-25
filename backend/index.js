const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

//Defind middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://vinil-store-app.vercel.app/"],
    credentials: true,
  })
);

//Define routes
const vinylRoutes = require("./src/vinyls/vinyls.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");
app.use("/api/vinyls", vinylRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Define the server port, using an environment variable if available, otherwise default to 2000
const port = process.env.PORT || 2000;
// Define an asynchronous function to connect to MongoDB and set up a simple route
async function main() {
  // Connect to MongoDB using the environment variable DB_URL
  await mongoose.connect(process.env.DB_URL);
  // Define a simple route that responds with a message
  app.use("/", (req, res) => {
    res.send("Vinyl Store Server");
  });
}
// Call the main function and handle success or failure of MongoDB connection
main()
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log(err));
// Start the Express server and listen on the defined port
app.listen(port, () => {
  console.log(`Vinyl Store app listening on port ${port}`);
});
