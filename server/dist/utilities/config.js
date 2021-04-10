"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.DB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const SERVER_HOST = process.env.SERVER_PORT || "localhost";
const ENVIRONMENT = process.env.APP_ENV || "dev";
const IS_PRODUCTION = ENVIRONMENT === "production";
// do something with these if u ever do auth
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const SESSION_SECRET = process.env.SESSION_SECRET || "secret";
exports.DB = {
    USER: process.env.DB_USER || "dbAdmin",
    PASSWORD: process.env.DB_USER_PWD || "vJpKcS6mBUIRJcRI",
    HOST: process.env.DB_HOST || "cluster0.al7ca.mongodb.net",
    NAME: process.env.DB_NAME || "SeatReservation",
    PORT: process.env.DB_PORT || 5000,
};
const SERVER = {
    host: SERVER_HOST,
    port: SERVER_PORT,
};
exports.config = {
    server: SERVER,
};
