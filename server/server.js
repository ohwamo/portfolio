import dotenv from "dotenv"
dotenv.config()

import connectDb from "./config/db.js"
import app from "./app.js"

// db connections

connectDb();

// test server
app.get("/test", (req, res)=>{
    res.send("hello world")
})


app.listen(process.env.PORT, ()=>{
    console.log("server is runing")
})




