import express from 'express';

import {
  createManyOffices,
  deleteOffice,
  getOffice,
  getOffices,
  updateManyOffices
} from '../controllers';

const officeRouter = express.Router();

officeRouter.get("/office", getOffices);
officeRouter.get("/office/by-id", getOffice);
officeRouter.delete("/office", deleteOffice);
officeRouter.post("/office", updateManyOffices);
officeRouter.put("/office", createManyOffices);

export default officeRouter;
