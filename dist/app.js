"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const logging_1 = __importDefault(require("./utilities/logging"));
const config_1 = require("./utilities/config");
const office_1 = __importDefault(require("./routes/office"));
const reservation_1 = __importDefault(require("./routes/reservation"));
require("./database"); // initialise the database
const NAMESPACE = "Server";
const app = express_1.default();
// Logging the request
app.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on("finish", () => {
        logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});
// Parse the request
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// API rules
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // remove for prod
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
        return res.status(200).json({});
    }
    next();
});
// Routes
app.use("/office", office_1.default);
app.use("/reservation", reservation_1.default);
// Error handling
app.use((req, res) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message,
    });
});
// Create the server
const httpServer = http_1.default.createServer(app);
httpServer.listen(config_1.config.server.port, () => {
    logging_1.default.info(NAMESPACE, `Server running on ${config_1.config.server.host}:${config_1.config.server.port}`);
});
