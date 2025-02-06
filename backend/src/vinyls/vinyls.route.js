const express = require("express");
const Vinyl = require("./vinyls.model");
const router = express.Router();

//post new vinyl
router.post("/create-vinyl", async (req, res) => {
  try {
    const newVinyl = await Vinyl({ ...req.body });
    await newVinyl.save();
    res
      .status(200)
      .send({ message: "New vinyl posted successfully", vinyl: newVinyl });
  } catch (err) {
    console.error("Error creating new vinyl", error);
    res.status(500).send({ message: "Creating new vinyl failed" });
  }
});

module.exports = router;
