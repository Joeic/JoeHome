import express from "express";
import {
    getManager,
    createManager,
    updateManager,
    getManagerProperty,
} from "../controllers/managerControllers";

const router = express.Router();
router.get("/:cognitoId", getManager);
router.put("/:cognitoId", updateManager);
router.post("/", createManager);
router.get("/:cognitoId/properties", getManagerProperty);

export default router;