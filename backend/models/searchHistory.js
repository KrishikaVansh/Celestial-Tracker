import mongoose from "mongoose";

const searchHistorySchema = new mongoose.Schema({
  location: String,
  date: String,
  results: Array, // Store the celestial events found
  searchedAt: { type: Date, default: Date.now },
});

const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema);

export default SearchHistory; // ✅ Use ES module export
