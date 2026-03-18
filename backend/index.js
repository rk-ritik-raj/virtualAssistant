import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"

dotenv.config()

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "https://virtualassistant-bjti.onrender.com"
]

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null,true)
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error("CORS not allowed"), false)
    }
    return callback(null,true)
  },
  credentials:true,
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders:["Content-Type","Authorization"]
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

const port = process.env.PORT || 5000

app.listen(port,()=>{
  connectDb()
  console.log("server started")
})
