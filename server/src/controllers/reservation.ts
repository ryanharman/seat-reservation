import e, { Errback, Request, Response } from "express";
import {
  IReservation,
  Reservation,
} from "../database/models/reservation.model";
import logging from "../utilities/logging";

const NAMESPACE = "Reservation Controller";

// Get all reservations
const reservations = (req: Request, res: Response) => {
  logging.info(NAMESPACE, `Get Reservations route called`);

  Reservation.find({}, (err: Errback, reservations: IReservation) => {
    if (err) {
      console.log(
        logging.error(NAMESPACE, `Get Reservations route error`, err)
      );
    } else {
      res.send(reservations);
    }
  });
};

// should probably merge these two into one request and check against the body
// to determine whether it's for a user? v^

// Get reservations by user
const reservationsByUser = (req: Request, res: Response) => {
  logging.info(NAMESPACE, `Get Reservations by user route called`);

  const filter = { name: req.body.name };
  Reservation.find({ filter }, (err: Errback, reservations: IReservation) => {
    if (err) {
      console.log(
        logging.error(NAMESPACE, `Get Reservations by user route error`, err)
      );
    } else {
      res.send(reservations);
    }
  });
};

// Get reservation by id
const reservationById = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Get Reservation by Id route called");

  Reservation.findById(
    req.params.id,
    (err: Errback, reservation: IReservation) => {
      if (err) {
        console.log(
          logging.error(NAMESPACE, `Get Reservation by Id route error`, err)
        );
      } else {
        res.send(reservation);
      }
    }
  );
};

// Create a new reservation
const postReservation = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Post Reservation route called");

  Reservation.create(req.body, (err: Errback, result: IReservation) => {
    if (err) {
      console.log(
        logging.error(NAMESPACE, `Post Reservation route error`, err)
      );
    } else {
      res.send({ result }); // returns the body with id's
    }
  });
};

// Create multiple reservations
const postReservations = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Post Reservations route called");

  Reservation.insertMany(req.body)
    .then((obj) => {
      res.send(obj);
    })
    .catch((err: Errback) => {
      console.log(
        logging.error(NAMESPACE, `Post Reservations route error`, err)
      );
    });
};

// Update a reservation
const updateReservation = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Update Reservation route called");

  Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((obj) => {
      res.send(obj);
    })
    .catch((err: Errback) => {
      logging.info(NAMESPACE, "Update Reservation route error", err);
    });
};

// Delete a reservation
const deleteReservation = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Delete Reservation route called");

  Reservation.deleteOne(req.body)
    .then(() => {
      res.send("Document deleted");
    })
    .catch((err: Errback) => {
      console.log(
        logging.error(NAMESPACE, `Delete Reservation route error`, err)
      );
    });
};

export default {
  reservations,
  reservationById,
  reservationsByUser,
  postReservation,
  postReservations,
  updateReservation,
  deleteReservation,
};
