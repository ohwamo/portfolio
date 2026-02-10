import express from "express"
import cors from "cors"
import projectRoute from "./routes/project.routes.js"

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/project", projectRoute)

export default app