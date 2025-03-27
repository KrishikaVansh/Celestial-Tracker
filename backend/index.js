require ("dotenv").config();
const express= require("express");

const cors=require("cors");
const connectDB = require("./config/db");

const app=express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/events/",require("./routes/eventRoutes"));
app.use("/api/history", require("./routes/historyRoutes"));

const PORT= process.env.PORT ||5000;
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("Celestial Tracker App Welcomes You to journey of universe!");
});