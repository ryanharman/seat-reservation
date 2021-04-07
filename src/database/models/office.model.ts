import mongoose, { Schema, Document } from "mongoose";

const OfficeSchema = new mongoose.Schema(
  {
    name: String,
    capacity: Number,
    manager: String,
    seats: [{ seatNumber: Number, accessible: Boolean }],
  },
  { collection: "Office" }
);

export interface ISeat extends Document {
  seatNumber: number;
  accessible: boolean;
}

export interface IOffice extends Document {
  name: string;
  capacity: number;
  manager: string;
  seats: [ISeat];
}

export const Office = mongoose.model<IOffice>("Office", OfficeSchema);
