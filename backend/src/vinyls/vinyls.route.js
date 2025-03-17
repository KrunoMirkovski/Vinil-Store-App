const express = require("express");
const Vinyl = require("./vinyls.model");
const {
  postVinyl,
  getAllVinyls,
  getSingleVinyl,
  updateVinyl,
  deleteVinyl,
} = require("./vinyl.controller");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

//post new vinyl
router.post("/create-vinyl", verifyToken, postVinyl);

//get all vinyls
router.get("/", getAllVinyls);

//get single vinyl
router.get("/:id", getSingleVinyl);

//update vinyl
router.put("/edit/:id", verifyToken, updateVinyl);

//delete vinyl
router.delete("/delete/:id", verifyToken, deleteVinyl);

module.exports = router;
