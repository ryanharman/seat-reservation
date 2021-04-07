import express from "express";
import controller from "../controllers/office";

const router = express.Router();

router.get("/", controller.offices);

export default router;
