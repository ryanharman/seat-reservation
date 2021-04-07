import express, { Application, Request, Response, NextFunction } from "express";
import http from "http";
import logging from "./utilities/logging";
import { config } from "./utilities/config";
import officeRoutes from "./routes/office";
import "./database"; // initialise the database

const NAMESPACE = "Server";
const app: Application = express();

// Logging the request
app.use((req: Request, res: Response, next: NextFunction) => {
  logging.info(
    NAMESPACE,
    `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });

  next();
});

// Parse the request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API rules
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*"); // remove for prod
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json({});
  }

  next();
});

// Routes
app.use("/office", officeRoutes);

// Error handling
app.use((req: Request, res: Response) => {
  const error = new Error("not found");

  return res.status(404).json({
    message: error.message,
  });
});

// Create the server
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => {
  logging.info(
    NAMESPACE,
    `Server running on ${config.server.host}:${config.server.port}`
  );
});
