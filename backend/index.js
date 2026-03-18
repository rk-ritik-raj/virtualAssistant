// import express from "express"
// import dotenv from "dotenv"
// import cors from "cors"
// import cookieParser from "cookie-parser"

// import connectDb from "./config/db.js"
// import authRouter from "./routes/auth.routes.js"
// import userRouter from "./routes/user.routes.js"

// dotenv.config()

// const app = express()

// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://virtualassistant-bjti.onrender.com"
// ]

// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true
// }))

// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/auth", authRouter)
// app.use("/api/user", userRouter)

// const port = process.env.PORT || 5000

// app.listen(port, () => {
//   connectDb()
//   console.log("server started")
// })

import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"

dotenv.config()

const app = express()

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","https://virtualassistant-bjti.onrender.com")
  res.header("Access-Control-Allow-Credentials","true")
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS")

  if(req.method==="OPTIONS"){
    return res.sendStatus(200)
  }

  next()
})

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

const port = process.env.PORT || 5000

app.listen(port,()=>{
  connectDb()
  console.log("server started")
})
