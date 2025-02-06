const mongoose = require("mongoose");

// Define a schema for the Vinyl collection in MongoDB
const vinylSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    oldPrice: Number,
    newPrice: Number,
    trending: {
      type: Boolean,
      required: true,
    },
    // Automatically stores the creation date of the record, defaulting to the current time
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  // Enabling timestamps automatically adds 'createdAt' and 'updatedAt' fields
  { timestamps: true }
);
// Create a Mongoose model named 'Vinyl' using the defined schema
const Vinyl = mongoose.model("Vinyl", vinylSchema);

module.exports = Vinyl;
