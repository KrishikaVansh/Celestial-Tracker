const Event = require("../models/events");
const axios = require("axios");
const { saveSearchHistory } = require("./historyController");



const getCelestialEvents = async (req, res) => {
  const { date } = req.query;
  if (!date) {
    return res.status(400).json({ message: "Date is required" });
  }

  const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=xqxy6jde6ScH9IZumjDy1nAMyT6g9TgdX6a2fROy`;

  try {
    const response = await axios.get(apiUrl);
    console.log("NASA API Response:", response.data);

    if (!response.data || response.data.count === 0) {
      return res.status(404).json({ message: "No celestial events found" });
    }

    res.json(response.data);
  } catch (error) {
    console.error("NASA API Fetch Error:", error.message);
    res.status(500).json({ message: "Error fetching celestial events", error: error.message });
  }
};

module.exports = { getCelestialEvents };



  
  