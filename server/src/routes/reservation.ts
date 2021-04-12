import express from "express";
import controller from "../controllers/reservation";

const router = express.Router();

router.get("/", controller.reservations);
router.get("/byUser", controller.reservationsByUser);
router.get("/byOffice", controller.reservationsByOffice);
router.get("/:id", controller.reservationById);
router.post("/", controller.postReservation);
router.post("/many", controller.postReservations);
router.put("/:id", controller.updateReservation);
router.delete("/", controller.deleteReservation);

export default router;
