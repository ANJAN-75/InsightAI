import express from "express";
import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";

import {
  registerController,
  loginController,
  verifyEmailController,
  getmeController,
} from "../controllers/auth.controller.js";

import { authUser } from "../middleware/auth.middleware.js";

export const Authroute = express.Router();

//Register route
//POST->  /api/auth/register
Authroute.post("/register", registerValidator, registerController);

//Login route
//POST-> /api/auth/login
Authroute.post("/login", loginValidator, loginController);

//get-me route
//GET-> /api/auth/get-me
Authroute.get("/get-me", authUser,getmeController);

//Verify-email route
//GET-> /api/auth/verify-email

Authroute.get("/verify-email", verifyEmailController);
