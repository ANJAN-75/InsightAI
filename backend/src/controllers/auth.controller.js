import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../services/mail.service.js";
//register controller
export const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await UserModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "user already exist with username and password",
      sucess: false,
      err: "user already exist",
    });
  }
  const user = await UserModel.create({ username, email, password });

  const emailVerificationToken = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET_TOKEN,
  );
  await sendEmail({
    to: email,
    subject: "Welcome to inshitAI",
    html: `
        <h1>Welcome</h1>
        ${username}
        <p>Please verify your email address by clicking the link below:</p>
        <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
        <p>If you did not create an account, please ignore this email.</p>
        <p>Thanks for joining InshitAi</p>
    `,
  });
  res.status(201).json({
    message: "user registerd sucessfully",
    sucess: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};
//login controller
export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email,
  });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
      success: false,
      err: "user not found",
    });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({
      message: "user password is incorrect",
      success: false,
      err: "password is incorrect",
    });
  }

  if (!user.Verified) {
    return res.status(400).json({
      message: "plese verify your email before login",
      success: false,
      err: "user not verified",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_TOKEN);

  res.cookie("token", token);

  res.status(200).json({
    message: "user login sucessfully",
    sucess: true,
    user: {
      username: user.username,
      email: user.email,
    },
  });
};
//get-me controller
export const getmeController = async (req, res) => {
  const userID = req.user.id;

  const user =await UserModel.findById(userID).select("-password");

  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
      err: "User not found",
    });
  }

  res.status(200).json({
    message: "User details fetched successfully",
    success: true,
    user,
  });
};
//verify-email controller
export const verifyEmailController = async (req, res) => {
  const { token } = req.query;

  const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

  if (!decoded) {
    return res.status(401).json({
      message: "Token not found",
      sucess: false,
    });
  }

  const user = await UserModel.findOne({ email: decoded.email });

  if (!user) {
    return res.status(404).json({
      message: "no user found",
      success: false,
    });
  }
  if(user.Verified){
    return res.send(`
      <h1>Already verified</h1>
      `)
  }
  user.Verified = true;
  await user.save();

  const html = `
        <h1>Email Verified Successfully!</h1>
        <p>Your email has been verified. You can now log in to your account.</p>
        <a href="http://localhost:5173/login">Go to Login</a>
    `;
  return res.send(html);
};
