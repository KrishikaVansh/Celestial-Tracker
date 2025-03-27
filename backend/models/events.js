const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  type: String, // e.g., Eclipse, Meteor Shower, ISS Pass
  description: String,
  location: String, // if needed
});

module.exports = mongoose.model("Event", eventSchema);
