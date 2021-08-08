"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const Reservation_1 = require("./resolvers/Reservation");
const typeorm_1 = require("typeorm");
const Register_1 = require("./resolvers/user/Register");
const main = async () => {
    await typeorm_1.createConnection();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await type_graphql_1.buildSchema({
            resolvers: [hello_1.HelloResolver, Reservation_1.ReservationResolver, Register_1.RegisterResolver],
        }),
    });
    const app = express_1.default();
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