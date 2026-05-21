import dotenv from "dotenv"
import {app} from "./src/app.js"
import { connectDb } from "./src/config/db.js"
dotenv.config()

app.listen(process.env.PORT,()=>{
    console.log("Server connected...")
})
connectDb()