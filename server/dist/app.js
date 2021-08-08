"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const Reservation_1 = require("./resolvers/reservation/Reservation");
const typeorm_1 = require("typeorm");
const Register_1 = require("./resolvers/user/Register");
const Login_1 = require("./resolvers/user/Login");
const Me_1 = require("./resolvers/user/Me");
const redis_1 = require("./redis");
const cors_1 = __importDefault(require("cors"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const main = async () => {
    await typeorm_1.createConnection();
    const schema = await type_graphql_1.buildSchema({
        resolvers: [hello_1.HelloResolver, Reservation_1.ReservationResolver, Register_1.RegisterResolver, Login_1.LoginResolver, Me_1.MeResolver],
        authChecker: ({ context: { req } }) => {
            return !!req.session.userId;
        },
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req }) => ({ req }),
    });
    const app = express_1.default();
    const RedisStore = connect_redis_1.default(express_session_1.default);
    app.use(cors_1.default({
        credentials: true,
        origin: "http://localhost:3000",
    }));
    app.use(express_session_1.default({
        store: new RedisStore({
            client: redis_1.redis,
        }),
        name: "qid",
        secret: "aslkdfjoiq12312",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
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