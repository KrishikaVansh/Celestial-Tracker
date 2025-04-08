
import express from "express";
const router = express.Router();
import { getCelestialEvents } from "../controllers/eventController.js";



router.post("/search", getCelestialEvents );



export default router;