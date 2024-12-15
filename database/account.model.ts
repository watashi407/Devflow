import { Schema, Types, model, models } from "mongoose";

// Interface for the document
export interface IAccount extends Document {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  provider: string;
  providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: {
      type: String,
      required: true,
    },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true }
);

export const Account =
  models?.account || model<IAccount>("Account", AccountSchema);
