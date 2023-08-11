import { Router } from "express";
import { addMessage, getMessage } from "../controllers/MessageController.js";

const router = Router();

router.post("/add-message", addMessage);
router.get("/get-messages/:from/:to", getMessage);

export default router;
