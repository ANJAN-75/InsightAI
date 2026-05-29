import express from "express"
import { Authroute } from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"
export const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(morgan("dev"));

app.use("/api/auth",Authroute)


