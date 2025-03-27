const express = require("express");
const router = express.Router();
const {  getCelestialEvents} = require("../controllers/eventController");


router.post("/search", getCelestialEvents );

module.exports = router;
