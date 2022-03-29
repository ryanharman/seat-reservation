import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';

import { PrismaClient } from '@prisma/client';

import { redis } from './redis';
import { routes } from './routes';

const app = express();
const RedisStore = connectRedis(session);
const prisma = new PrismaClient();

const main = async () => {
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000", "http://localhost:5555"],
    })
  );

  // app.use(
  //   session({
  //     store: new RedisStore({
  //       client: redis as any,
  //     }),
  //     name: "qid",
  //     secret: "aslkdfjoiq12312", // TODO: move to env file and use a better value
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === "production",
  //       maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // TODO: turn into a real value
  //     },
  //   })
  // );

  routes(app);

  app.listen(4000, () => {
    console.log(`🚀 Server started on http://localhost:4000`);
  });
};

main().catch((err) => {
  console.error(err);
});
