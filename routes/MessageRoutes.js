import { Router } from "express";
import {
  addImageMessage,
  addMessage,
  getMessage,
} from "../controllers/MessageController.js";
import multer from "multer";

const router = Router();

const uploadImage = multer({ dest: "uploads/images" });

router.post("/add-message", addMessage);
router.get("/get-messages/:from/:to", getMessage);
router.post("/add-image-message", uploadImage.single("image"), addImageMessage);

export default router;
