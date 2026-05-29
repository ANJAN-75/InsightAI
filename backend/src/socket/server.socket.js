import { error } from "node:console";
import { Server } from "socket.io";
let io
export function initSocket(httpserver){
    io=new Server(httpserver,{
        cors:{
            origin:"http://localhost:5173",
            Credential:true
        }
        
    })

    console.log("socket io server Running")
    io.on("connection",(socket)=>{
        console.log("a user connected"+socket.id)
    })
}

export function getIo(){
    if(!io){
        throw new Error("Socket io not initilized")
    }
    return io
}