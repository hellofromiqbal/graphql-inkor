import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  memberNo: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  amount: {
    type: Number
  },
  token: {
    type: String
  },
  expired: {
    type: Number
  }
}, { timestamps: true });

export default model('User', UserSchema);