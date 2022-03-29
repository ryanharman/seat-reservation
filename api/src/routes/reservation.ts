import express from 'express';

import {
  deleteReservation,
  getReservation,
  getReservations,
  getReservationsByItem,
  getReservationsByOffice,
  getReservationsByUser
} from '../controllers';

const reservationRouter = express.Router();

reservationRouter.get("/reservation", getReservations);
reservationRouter.get("/reservation/by-id", getReservation);
reservationRouter.get("/reservation/by-item", getReservationsByItem);
reservationRouter.get("/reservation/by-user", getReservationsByUser);
reservationRouter.get("/reservation/by-office", getReservationsByOffice);
reservationRouter.get("/reservation/delete", deleteReservation);

export default reservationRouter;
