import { model, Schema } from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  userName: {
    type: String,
  },
});

export default model<iUserData>("user", userModel);
