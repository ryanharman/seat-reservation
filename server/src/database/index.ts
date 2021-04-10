import mongoose from "mongoose";
import { DB } from "../utilities/config";
import logging from "../utilities/logging";

const NAMESPACE = "Database";

// Build the connection string
const dbURI = `mongodb+srv://${DB.USER}:${encodeURIComponent(DB.PASSWORD)}@${
  DB.HOST
}/${DB.NAME}`;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

// Create the database connection
mongoose
  .connect(dbURI, options)
  .then(() => {
    logging.info(NAMESPACE, `Mongoose connection done`);
  })
  .catch((e) => {
    logging.error(NAMESPACE, `Mongoose connection error`, e);
  });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  logging.info(NAMESPACE, `Mongoose default connection open to ${dbURI}`);
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  logging.error(NAMESPACE, `Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  logging.info(NAMESPACE, `Mongoose default connection disconnected`);
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    logging.info(
      NAMESPACE,
      `Mongoose default connection disconnected through app termination`
    );
    process.exit(0);
  });
});
