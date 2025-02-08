const express = require("express");
const Vinyl = require("./vinyls.model");
const {
  postVinyl,
  getAllVinyls,
  getSingleVinyl,
  updateVinyl,
  deleteVinyl,
} = require("./vinyl.controller");
const router = express.Router();

//post new vinyl
router.post("/create-vinyl", postVinyl);

//get all vinyls
router.get("/", getAllVinyls);
module.exports = router;

//get single vinyl
router.get("/:id", getSingleVinyl);

//update vinyl
router.put("/edit/:id", updateVinyl);

//delete vinyl
router.delete("/delete/:id", deleteVinyl);
