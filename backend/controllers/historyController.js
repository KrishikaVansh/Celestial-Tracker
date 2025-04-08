import axios from "axios";
import SearchHistory from "../models/searchHistory.js"; // ✅ Ensure `.js` extension

const saveSearchHistory = async (location, date, results) => {
  try {
    const searchEntry = new SearchHistory({
      location,
      date,
      results,
    });
    await searchEntry.save();
  } catch (error) {
    console.error("Error saving search history:", error);
  }
};

// Get all search history
const getSearchHistory = async (req, res) => {
  try {
    const history = await SearchHistory.find().sort({ searchedAt: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching search history" });
  }
};

export { saveSearchHistory, getSearchHistory }; // ✅ Use ES module export
