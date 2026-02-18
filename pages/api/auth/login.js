import dbConnect from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import {createToken} from "../../../lib/auth";

export default async function handler(req,res){
  await dbConnect();
  const {email,password}=req.body;
  const user=await User.findOne({email});
  if(!user) return res.status(400).json({error:"User not found"});
  const match=await bcrypt.compare(password,user.password);
  if(!match) return res.status(400).json({error:"Invalid password"});
  const token=createToken(user);
  res.json({token});
}