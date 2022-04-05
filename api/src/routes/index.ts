import { Express } from 'express';

import itemRouter from './bookableItem';
import officeRouter from './office';
import officeManagerRouter from './officeManager';
import reservationRouter from './reservation';
import userRouter from './user';

export const routes = (app: Express) => {
  app.use("/", userRouter, reservationRouter, itemRouter, officeRouter, officeManagerRouter);
};
