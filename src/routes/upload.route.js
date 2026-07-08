import express from "express";
import { upload } from "../middleware/upload.middleware.js";
import { uploadCSV } from "../controllers/upload.controller.js";

const router = express.Router();

router.post(
    "/upload",
    upload.single("file"),
    uploadCSV
);

export default router;