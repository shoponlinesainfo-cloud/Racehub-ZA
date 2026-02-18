import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: { type: String, enum: ["car","parts"] },
  seller: String
},{timestamps:true});

export default mongoose.models.Listing || mongoose.model("Listing", ListingSchema);