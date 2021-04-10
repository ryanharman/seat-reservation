"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reservation_1 = __importDefault(require("../controllers/reservation"));
const router = express_1.default.Router();
router.get("/", reservation_1.default.reservations);
router.get("/byUser", reservation_1.default.reservationsByUser);
router.get("/:id", reservation_1.default.reservationById);
router.post("/", reservation_1.default.postReservation);
router.post("/many", reservation_1.default.postReservations);
router.put("/:id", reservation_1.default.updateReservation);
router.delete("/", reservation_1.default.deleteReservation);
exports.default = router;
