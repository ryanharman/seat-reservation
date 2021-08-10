import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./modules/hello";
import { ReservationResolver } from "./modules/Reservation";
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/user/Register";
import { LoginResolver } from "./modules/user/Login";
import { MeResolver } from "./modules/user/Me";
import { redis } from "./redis";
import cors from "cors";
import connectRedis from "connect-redis";
import session from "express-session";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const main = async () => {
  // postgres connection
  await createConnection();

  const schema = await buildSchema({
    resolvers: [HelloResolver, ReservationResolver, RegisterResolver, LoginResolver, MeResolver],
    authChecker: ({ context: { req } }) => {
      // TODO: implement roles
      return !!req.session.userId;
    },
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req }), // allows access to the request data in resolvers
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  const app: any = express();

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: "aslkdfjoiq12312", // TODO: move to env file
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // TODO: turn into a real value
      },
    })
  );

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`🚀 Server started on localhost:4000${apolloServer.graphqlPath}`);
  });
};

main().catch((err) => {
  console.error(err);
});
