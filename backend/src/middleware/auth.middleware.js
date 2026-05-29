import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const authUser = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
      sucess: false,
      error: "no token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
      success: false,
      err: "Invalid token",
    });
  }
};
