import express from "express"
import { getProject, createProject } from "../controller/project.controller.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

router.get("/", getProject)
router.post("/", protect, createProject)

export default router;