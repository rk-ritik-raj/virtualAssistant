import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"

dotenv.config()

const app = express()

app.use(cors({
 origin:true,
 credentials:true
}))

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
 res.send("API running")
})

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, async()=>{
 await connectDb()
 console.log("server running")
})
