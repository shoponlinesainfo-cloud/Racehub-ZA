import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  location: String,
  type: { type: String, enum: ["race","practice","meeting"] },
  createdBy: String
},{timestamps:true});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);