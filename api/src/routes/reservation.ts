import express from 'express';

import {
  createManyReservations,
  deleteReservation,
  getReservation,
  getReservations,
  getReservationsByItem,
  getReservationsByOffice,
  getReservationsByUser,
  updateManyReservations
} from '../controllers';

const reservationRouter = express.Router();

reservationRouter.get("/reservation", getReservations);
reservationRouter.get("/reservation/by-id", getReservation);
reservationRouter.get("/reservation/by-item", getReservationsByItem);
reservationRouter.get("/reservation/by-user", getReservationsByUser);
reservationRouter.get("/reservation/by-office", getReservationsByOffice);
reservationRouter.get("/reservation", deleteReservation);
reservationRouter.post("/reservation", updateManyReservations);
reservationRouter.put("/reservation", createManyReservations);

export default reservationRouter;
