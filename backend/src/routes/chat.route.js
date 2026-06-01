import express from "express"
import {generateMsgResponse,generateTaitleResponse} from "../services/ai.services.js"
import { authUser } from "../middleware/auth.middleware.js"
import {createChatController,deleteChatController,getChatController, getMessageController} from "../controllers/chat.controller.js"
export const Chatroute=express.Router()


//this  route for start message with ai 
// POST-/api/chat/message
Chatroute.post("/message", authUser,createChatController)


//this route for get all chat
//GET- /api/chat/
Chatroute.get("/",authUser,getChatController)


//this route for get all msg from a chat 
//GET- /api/chat/:chatId/message
Chatroute.get("/:chatID/messages",authUser,getMessageController)


//this route for delete chat 
// DELETE -/api/chat/delete/:chatID
Chatroute.delete("/delete/:chatID",authUser,deleteChatController)


