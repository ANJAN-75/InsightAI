import express from "express"
import {generateMsgResponse,generateTaitleResponse} from "../services/ai.services.js"
import { authUser } from "../middleware/auth.middleware.js"
import {chatController} from "../controllers/chat.controller.js"
export const Chatroute=express.Router()

Chatroute.post("/", authUser,chatController)



