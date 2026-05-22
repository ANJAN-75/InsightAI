import express from "express"
import { registerValidator } from "../validators/auth.validator.js"
import registerController from "../controllers/auth.controller.js"


const Authroute=express.Router()

//Register route
//  /api/auth/register
Authroute.post("/register",registerValidator,registerController)
