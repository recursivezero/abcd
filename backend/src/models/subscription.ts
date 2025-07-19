import mongoose, { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    followerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    followingId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

export const Subscribers = model("Subscribers", subscriptionSchema);
