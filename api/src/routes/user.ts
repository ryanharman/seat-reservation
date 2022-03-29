import express from 'express';

import { getUser } from '../controllers';

const userRouter = express.Router();

userRouter.get("/user", getUser);

export default userRouter;
