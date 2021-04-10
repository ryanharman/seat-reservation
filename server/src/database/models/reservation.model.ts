import mongoose, { Schema, Document } from "mongoose";
import { IOffice } from "./office.model";

const ReservationSchema: Schema = new mongoose.Schema(
  {
    dateBooked: Date,
    seatBooked: Number,
    office: { type: Schema.Types.ObjectId, ref: "Office" },
    user: String,
  },
  { collection: "Reservation" }
);

export interface IReservation extends Document {
  dateBooked: Date;
  seatBooked: number;
  office: IOffice["_id"];
  user: string;
}

export const Reservation = mongoose.model<IReservation>(
  "Reservation",
  ReservationSchema
);
