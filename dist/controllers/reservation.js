"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservation_model_1 = require("../database/models/reservation.model");
const logging_1 = __importDefault(require("../utilities/logging"));
const NAMESPACE = "Reservation Controller";
// Get all reservations
const reservations = (req, res) => {
    logging_1.default.info(NAMESPACE, `Get Reservations route called`);
    reservation_model_1.Reservation.find({}, (err, reservations) => {
        if (err) {
            console.log(logging_1.default.error(NAMESPACE, `Get Reservations route error`, err));
        }
        else {
            res.send(reservations);
        }
    });
};
// should probably merge these two into one request and check against the body
// to determine whether it's for a user? v^
// Get reservations by user
const reservationsByUser = (req, res) => {
    logging_1.default.info(NAMESPACE, `Get Reservations by user route called`);
    const filter = { name: req.body.name };
    reservation_model_1.Reservation.find({ filter }, (err, reservations) => {
        if (err) {
            console.log(logging_1.default.error(NAMESPACE, `Get Reservations by user route error`, err));
        }
        else {
            res.send(reservations);
        }
    });
};
// Get reservation by id
const reservationById = (req, res) => {
    logging_1.default.info(NAMESPACE, "Get Reservation by Id route called");
    reservation_model_1.Reservation.findById(req.params.id, (err, reservation) => {
        if (err) {
            console.log(logging_1.default.error(NAMESPACE, `Get Reservation by Id route error`, err));
        }
        else {
            res.send(reservation);
        }
    });
};
// Create a new reservation
const postReservation = (req, res) => {
    logging_1.default.info(NAMESPACE, "Post Reservation route called");
    reservation_model_1.Reservation.create(req.body, (err, result) => {
        if (err) {
            console.log(logging_1.default.error(NAMESPACE, `Post Reservation route error`, err));
        }
        else {
            res.send({ result }); // returns the body with id's
        }
    });
};
// Create multiple reservations
const postReservations = (req, res) => {
    logging_1.default.info(NAMESPACE, "Post Reservations route called");
    reservation_model_1.Reservation.insertMany(req.body)
        .then((obj) => {
        res.send(obj);
    })
        .catch((err) => {
        console.log(logging_1.default.error(NAMESPACE, `Post Reservations route error`, err));
    });
};
// Update a reservation
const updateReservation = (req, res) => {
    logging_1.default.info(NAMESPACE, "Update Reservation route called");
    reservation_model_1.Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((obj) => {
        res.send(obj);
    })
        .catch((err) => {
        logging_1.default.info(NAMESPACE, "Update Reservation route error", err);
    });
};
// Delete a reservation
const deleteReservation = (req, res) => {
    logging_1.default.info(NAMESPACE, "Delete Reservation route called");
    reservation_model_1.Reservation.deleteOne(req.body)
        .then(() => {
        res.send("Document deleted");
    })
        .catch((err) => {
        console.log(logging_1.default.error(NAMESPACE, `Delete Reservation route error`, err));
    });
};
exports.default = {
    reservations,
    reservationById,
    reservationsByUser,
    postReservation,
    postReservations,
    updateReservation,
    deleteReservation,
};
