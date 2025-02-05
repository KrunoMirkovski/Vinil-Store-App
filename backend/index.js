//MongoDB Cluster password: l8QboclaBUfmRtHS

const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 2000;

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Vinyl Store Server");
  });
}

main()
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Vinyl Store app listening on port ${port}`);
});
