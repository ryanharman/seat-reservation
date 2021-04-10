import express from "express";
import controller from "../controllers/office";

const router = express.Router();

router.get("/", controller.offices);
router.get("/:id", controller.officeById);
router.post("/", controller.postOffice);
router.post("/many", controller.postOffices);
router.put("/:id", controller.updateOffice);
router.delete("/", controller.deleteOffice);

export default router;
