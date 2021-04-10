"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const office_model_1 = require("../database/models/office.model");
const logging_1 = __importDefault(require("../utilities/logging"));
const NAMESPACE = "Reservation Controller";
// todo: include a query option into this?
// Get all offices
const offices = (req, res) => {
    logging_1.default.info(NAMESPACE, `Get Offices route called`);
    office_model_1.Office.find({}, (err, offices) => {
        if (err) {
            console.log(logging_1.default.error(NAMESPACE, `Get Offices route error`, err));
        }
        else {
            res.send(offices);
        }
    });
};
// Get office by id
const officeById = (req, res) => {
    logging_1.default.info(NAMESPACE, "Get Office by Id route called");
    office_model_1.Office.findById(req.params.id, (err, office) => {
        if (err) {
            console.log(logging_1.default.error(NAMESPACE, `Get Office by Id route error`, err));
        }
        else {
            res.send(office);
        }
    });
};
// Create a new office
const postOffice = (req, res) => {
    logging_1.default.info(NAMESPACE, "Post Office route called");
    office_model_1.Office.create(req.body, (err, result) => {
        if (err) {
            console.log(logging_1.default.error(NAMESPACE, `Post Office route error`, err));
        }
        else {
            res.send({ result }); // returns the body with id's
        }
    });
};
// Create multiple offices
const postOffices = (req, res) => {
    logging_1.default.info(NAMESPACE, "Post Offices route called");
    office_model_1.Office.insertMany(req.body)
        .then((obj) => {
        res.send(obj);
    })
        .catch((err) => {
        console.log(logging_1.default.error(NAMESPACE, `Post Offices route error`, err));
    });
};
// Update an office
const updateOffice = (req, res) => {
    logging_1.default.info(NAMESPACE, "Update Office route called");
    office_model_1.Office.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((obj) => {
        res.send(obj);
    })
        .catch((err) => {
        logging_1.default.info(NAMESPACE, "Update Office route error", err);
    });
};
// Delete an office
const deleteOffice = (req, res) => {
    logging_1.default.info(NAMESPACE, "Delete Office route called");
    office_model_1.Office.deleteOne(req.body)
        .then(() => {
        res.send({ result: "Document deleted" });
    })
        .catch((err) => {
        console.log(logging_1.default.error(NAMESPACE, `Delete Office route error`, err));
    });
};
exports.default = {
    offices,
    officeById,
    postOffice,
    postOffices,
    updateOffice,
    deleteOffice,
};
