import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOST = process.env.SERVER_PORT || "localhost";
const ENVIRONMENT = process.env.APP_ENV || "dev";
const IS_PRODUCTION = ENVIRONMENT === "production";

// do something with these if u ever do auth
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const SESSION_SECRET = process.env.SESSION_SECRET || "secret";

export const DB = {
  USER: process.env.DB_USER || "",
  PASSWORD: process.env.DB_USER_PWD || "",
  HOST: process.env.DB_HOST || "",
  NAME: process.env.DB_NAME || "SeatReservation",
  PORT: process.env.DB_PORT || 3000,
};

const SERVER = {
  host: SERVER_HOST,
  port: SERVER_PORT,
};

export const config = {
  server: SERVER,
};
