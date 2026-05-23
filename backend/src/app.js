import express from "express"
import { Authroute } from "./routes/auth.route.js"

export const app=express()
app.use(express.json())


app.use("/api/auth",Authroute)


