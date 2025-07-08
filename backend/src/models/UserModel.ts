import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  timestamp: {
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now }
  }
});

export const User = model('User', userSchema);
