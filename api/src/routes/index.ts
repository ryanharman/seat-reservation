import { Express } from 'express';

import reservationRouter from './reservation';
import userRouter from './user';

export const routes = (app: Express) => {
  app.use("/", userRouter, reservationRouter);
};
