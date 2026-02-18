import dbConnect from "../../lib/db";
import Listing from "../../models/Listing";

export default async function handler(req,res){
  await dbConnect();
  if(req.method==="GET"){
    const listings=await Listing.find();
    res.json(listings);
  } else if(req.method==="POST"){
    const listing=await Listing.create(req.body);
    res.json(listing);
  }
}