"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const redis_1 = require("./redis");
const cors_1 = __importDefault(require("cors"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const apollo_server_core_1 = require("apollo-server-core");
const client_1 = require("@prisma/client");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../prisma/generated/type-graphql");
const prisma = new client_1.PrismaClient();
const main = async () => {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: type_graphql_2.resolvers,
        emitSchemaFile: true,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req }) => ({ prisma, req }),
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
    });
    const app = (0, express_1.default)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    app.use((0, cors_1.default)({
        credentials: true,
        origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
    }));
    app.use((0, express_session_1.default)({
        store: new RedisStore({
            client: redis_1.redis,
        }),
        name: 'qid',
        secret: 'aslkdfjoiq12312',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
        },
    }));
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log(`🚀 Server started on localhost:4000${apolloServer.graphqlPath}`);
    });
};
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=app.js.map