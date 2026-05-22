import UserModel from "../models/user.model"
import jwt from "jsonwebtoken"
import {sendEmail} from "../services/mail.service.js"

const registerController=async(req,res)=>{
    const {username,email,passsword}
    const isUserAlreadyExists=await UserModel.findOne({
        $or:[{username},{passsword}]
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"user already exist with username and password",
            sucess:false,
            err:"user already exist"
        })
    }
    const user= await UserModel.create({username,email,passsword})

    const emailVerificationToken =jwt.sign(
        {email:user.email},
        process.env.JWT_SECRET_TOKEN
    )
    await sendEmail({
        to:email,
        subject:"Welcome to inshitAI",
         html: `
        <h1>Welcome</h1>
        ${username}
        <p>Thanks for joining InshitAi</p>
    `
    })
    res.status(201).json({
        message:"user registerd sucessfully",
        sucess:true,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })

}


export default registerController