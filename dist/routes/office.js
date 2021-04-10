"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const office_1 = __importDefault(require("../controllers/office"));
const router = express_1.default.Router();
router.get("/", office_1.default.offices);
router.get("/:id", office_1.default.officeById);
router.post("/", office_1.default.postOffice);
router.post("/many", office_1.default.postOffices);
router.put("/:id", office_1.default.updateOffice);
router.delete("/", office_1.default.deleteOffice);
exports.default = router;
