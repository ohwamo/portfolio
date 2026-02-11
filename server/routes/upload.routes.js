import express from "express"
import multer from "multer"
import { uploadImg } from "../controller/upload.controller.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()
const upload = multer({ dest: "uploads/" })

router.post("/", protect, upload.single("image"), uploadImg)

export default router
