import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("username must be contain 3 and 30 charecters")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("plese provide a valid email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

    (req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        
        next()
    }
];


export const loginValidator=[
  body("email")
  .trim()
  .notEmpty()
  .withMessage("Email required for login")
  .isEmail()
  .withMessage("plese provide a valid email"),

  body("password")
  .notEmpty()
  .withMessage("password is required"),

  (req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.notEmpty()){
      return res.status(400).json({
        errors:errors.array()
      })
    }
    next()
  }
]