
import express from "express";
const router = express.Router();
import {getSearchHistory} from "../controllers/historyController.js";

router.get("/", getSearchHistory);


export default router;