const mongoose = require("mongoose");

const searchHistorySchema = new mongoose.Schema({
  location: String,
  date: String,
  results: Array, // Store the celestial events found
  searchedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SearchHistory", searchHistorySchema);
