import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["fan","driver","club_admin","admin"] },
  club: String,
  carNumber: String,
  stats: {
    wins: { type: Number, default: 0 },
    podiums: { type: Number, default: 0 },
    races: { type: Number, default: 0 }
  },
  subscription: { type: String, default: "free" }
},{timestamps:true});

export default mongoose.models.User || mongoose.model("User", UserSchema);