"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Office = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const OfficeSchema = new mongoose_1.default.Schema({
    name: String,
    capacity: Number,
    manager: String,
    seats: [{ seatNumber: Number, accessible: Boolean }],
}, { collection: "Office" });
exports.Office = mongoose_1.default.model("Office", OfficeSchema);
