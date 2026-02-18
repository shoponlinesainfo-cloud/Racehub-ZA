import dbConnect from "../../lib/db";
import Event from "../../models/Event";

export default async function handler(req,res){
  await dbConnect();
  if(req.method==="GET"){
    const events=await Event.find();
    res.json(events);
  } else if(req.method==="POST"){
    const event=await Event.create(req.body);
    res.json(event);
  }
}