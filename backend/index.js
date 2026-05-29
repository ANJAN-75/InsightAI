import dotenv from "dotenv"
import {app} from "./src/app.js"
import { connectDb } from "./src/config/db.js"
import http from "http"
import { initSocket } from "./src/socket/server.socket.js"
dotenv.config()

const server=http.createServer(app)


initSocket(server)


server.listen(process.env.PORT,()=>{
    console.log("Server connected...")
})
connectDb()