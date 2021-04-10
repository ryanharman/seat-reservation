"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../utilities/config");
const logging_1 = __importDefault(require("../utilities/logging"));
const NAMESPACE = "Database";
// Build the connection string
const dbURI = `mongodb+srv://${config_1.DB.USER}:${encodeURIComponent(
  config_1.DB.PASSWORD
)}@${config_1.DB.HOST}/${config_1.DB.NAME}`;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10,
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};
// Create the database connection
mongoose_1.default
  .connect(dbURI, options)
  .then(() => {
    logging_1.default.info(NAMESPACE, `Mongoose connection done`);
  })
  .catch((e) => {
    logging_1.default.error(NAMESPACE, `Mongoose connection error`, e);
  });
// CONNECTION EVENTS
// When successfully connected
mongoose_1.default.connection.on("connected", () => {
  logging_1.default.info(
    NAMESPACE,
    `Mongoose default connection open to ${dbURI}`
  );
});
// If the connection throws an error
mongoose_1.default.connection.on("error", (err) => {
  logging_1.default.error(
    NAMESPACE,
    `Mongoose default connection error: ${err}`
  );
});
// When the connection is disconnected
mongoose_1.default.connection.on("disconnected", () => {
  logging_1.default.info(NAMESPACE, `Mongoose default connection disconnected`);
});
// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  mongoose_1.default.connection.close(() => {
    logging_1.default.info(
      NAMESPACE,
      `Mongoose default connection disconnected through app termination`
    );
    process.exit(0);
  });
});
