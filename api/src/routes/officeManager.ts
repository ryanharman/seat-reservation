import express from 'express';

import {
  createOfficeManager,
  deleteOfficeManager,
  getOfficeManager,
  getOfficeManagers,
  getOfficeManagersByOffice,
  updateOfficeManager
} from '../controllers';

const officeManagerRouter = express.Router();

officeManagerRouter.get("/office-manager", getOfficeManagers);
officeManagerRouter.get("/office-manager/by-id", getOfficeManager);
officeManagerRouter.get("/office-manager/by-office", getOfficeManagersByOffice);
officeManagerRouter.delete("/office-manager", deleteOfficeManager);
officeManagerRouter.post("/office-manager", updateOfficeManager);
officeManagerRouter.put("/office-manager", createOfficeManager);

export default officeManagerRouter;
