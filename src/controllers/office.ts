import { Errback, Request, Response } from "express";
import { IOffice, Office } from "../database/models/office.model";
import logging from "../utilities/logging";

const NAMESPACE = "Reservation Controller";

// todo: include a query option into this?
// Get all offices
const offices = (req: Request, res: Response) => {
  logging.info(NAMESPACE, `Get Offices route called`);

  Office.find({}, (err: Errback, offices: IOffice) => {
    if (err) {
      console.log(logging.error(NAMESPACE, `Get Offices route error`, err));
    } else {
      res.send(offices);
    }
  });
};

// Get office by id
const officeById = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Get Office by Id route called");

  Office.findById(req.params.id, (err: Errback, office: IOffice) => {
    if (err) {
      console.log(
        logging.error(NAMESPACE, `Get Office by Id route error`, err)
      );
    } else {
      res.send(office);
    }
  });
};

// Create a new office
const postOffice = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Post Office route called");

  Office.create(req.body, (err: Errback, result: IOffice) => {
    if (err) {
      console.log(logging.error(NAMESPACE, `Post Office route error`, err));
    } else {
      res.send({ result }); // returns the body with id's
    }
  });
};

// Create multiple offices
const postOffices = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Post Offices route called");

  Office.insertMany(req.body)
    .then((obj) => {
      res.send(obj);
    })
    .catch((err: Errback) => {
      console.log(logging.error(NAMESPACE, `Post Offices route error`, err));
    });
};

// Update an office
const updateOffice = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Update Office route called");

  Office.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((obj) => {
      res.send(obj);
    })
    .catch((err: Errback) => {
      logging.info(NAMESPACE, "Update Office route error", err);
    });
};

// Delete an office
const deleteOffice = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Delete Office route called");

  Office.deleteOne(req.body)
    .then(() => {
      res.send({ result: "Document deleted" });
    })
    .catch((err: Errback) => {
      console.log(logging.error(NAMESPACE, `Delete Office route error`, err));
    });
};

export default {
  offices,
  officeById,
  postOffice,
  postOffices,
  updateOffice,
  deleteOffice,
};
