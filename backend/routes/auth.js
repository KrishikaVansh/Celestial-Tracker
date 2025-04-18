import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();
//signup route
router.post("/signup",async(req,res)=>{
    const {name,email,password}= req.body;

    try{
        let user= await User.findOne({email});
        if(user) return res.status(400).json({
            message:"User already exists"
        });

        const hashedPassword = await bcrypt.hash(password, 8);
        user= new User({name,email,password:hashedPassword});

        await user.save();

        res.status(201).json({ message:"User registered successfully"});
    }catch(error){
        res.status(500).json({message:"Server error!"});
    }

});

//login route

router.post("/login",async (req,res)=>{

    const {email, password}=req.body;

    try{
        const user=await User.findOne({email});

        if(!user) return res.status(400).json({message:"Invalid credentials"});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:"Invalid credentials"});

        const token= jwt.sign({id:user._id }, process.env.JWT_SECRET, {expiresIn:"1h"});
        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    }catch (error) {
        res.status(500).json({ message: "Server Error" });
      }


});
export default router;