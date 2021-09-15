import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { redis } from './redis';
import cors from 'cors';
import connectRedis from 'connect-redis';
import session from 'express-session';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
import { resolvers } from '../prisma/generated/type-graphql';

const prisma = new PrismaClient();

const main = async () => {
    const schema = await buildSchema({
        resolvers,
        emitSchemaFile: true,
    });

    const apolloServer = new ApolloServer({
        schema,
        context: ({ req }: any) => ({ prisma, req }), // allows access to the request data and prisma in resolvers
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });

    const app: any = express();

    const RedisStore = connectRedis(session);

    app.use(
        cors({
            credentials: true,
            origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
        })
    );

    app.use(
        session({
            store: new RedisStore({
                client: redis as any,
            }),
            name: 'qid',
            secret: 'aslkdfjoiq12312', // TODO: move to env file
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
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
