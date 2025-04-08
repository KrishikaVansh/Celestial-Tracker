import axios from "axios";
import { saveSearchHistory } from "./historyController.js"; // ✅ Already imported

const getCelestialEvents = async (req, res) => {
  const { date, location } = req.body; // ✅ Accept location too
  if (!date || !location) {
    return res.status(400).json({ message: "Date and location are required" });
  }

  const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=xqxy6jde6ScH9IZumjDy1nAMyT6g9TgdX6a2fROy`;

  try {
    const response = await axios.get(apiUrl);
    console.log("NASA API Response:", response.data);

    if (!response.data || response.data.element_count === 0) {
      return res.status(404).json({ message: "No celestial events found" });
    }

    // ✅ Extract relevant results from response to store
    const results = Object.values(response.data.near_earth_objects[date]).map(event => ({
      name: event.name,
      magnitude: event.absolute_magnitude_h,
      hazardous: event.is_potentially_hazardous_asteroid,
    }));

    // ✅ Save search history
    await saveSearchHistory(location, date, results);

    res.json(results); // Send only cleaned data
  } catch (error) {
    console.error("NASA API Fetch Error:", error.message);
    res.status(500).json({ message: "Error fetching celestial events", error: error.message });
  }
};

export { getCelestialEvents };
