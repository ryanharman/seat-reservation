import { Request, Response } from "express";
import { IOffice, Office } from "../database/models/office.model";
import logging from "../utilities/logging";

const NAMESPACE = "Office Controller";

const offices = (req: Request, res: Response) => {
  logging.info(NAMESPACE, `Office route called`);

  Office.find({}, (err, offices: IOffice) => {
    if (err) {
      console.log(logging.error(NAMESPACE, `Office route error`, err));
    } else {
      res.send(offices);
    }
  });
};

export default { offices };
