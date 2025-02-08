const Vinyl = require("./vinyls.model");

const postVinyl = async (req, res) => {
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
};

const getAllVinyls = async (req, res) => {
  try {
    const vinyls = await Vinyl.find().sort({ createdAt: -1 });
    res.status(200).send(vinyls);
  } catch (error) {
    console.error("Error fetching vinyls", error);
    res.status(500).send({ message: "Failed to get all vinyls" });
  }
};

const getSingleVinyl = async (req, res) => {
  try {
    const { id } = req.params;
    const vinyl = await Vinyl.findById(id);
    res.status(200).send(vinyl);
    if (!vinyl) {
      res.status(404).send({ message: "Vinyl not found" });
    }
  } catch (error) {
    console.error("Error fetching vinyl", error);
    res.status(500).send({ message: "Failed to fetch a vinyl" });
  }
};

const updateVinyl = async (req, res) => {
  try {
    const { id } = req.params;
    const updateVinyl = await Vinyl.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateVinyl) {
      res.status(404).send({ message: "Vinyl not found" });
    }
    res.status(200).send({
      message: "Successfully updated vinyl",
      vinyl: updateVinyl,
    });
  } catch (error) {
    console.error("Error updating a vinyl", error);
    res.status(500).send({ message: "Failed to update a vinyl" });
  }
};

const deleteVinyl = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVinyl = await Vinyl.findByIdAndDelete(id);
    if (!deleteVinyl) {
      res.status(404).send({ message: "Vinyl is not deleted" });
    }
    res.status(200).send({
      message: "Vinyl deleted successfully",
      vinyl: deleteVinyl,
    });
  } catch (error) {
    console.error("Error deleting a vinyl", error);
    res.status(500).send({ message: "Failed to delete a vinyl" });
  }
};

module.exports = {
  postVinyl,
  getAllVinyls,
  getSingleVinyl,
  updateVinyl,
  deleteVinyl,
};
