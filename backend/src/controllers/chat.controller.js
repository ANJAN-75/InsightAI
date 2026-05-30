import {
  generateMsgResponse,
  generateTaitleResponse,
} from "../services/ai.services.js";
import ChatModel from "../models/chat.model.js";
import MessageModel from "../models/message.model.js";

export const chatController = async (req, res) => {
  const { message, chatID } = req.body;

  let title = null;
  let chat = null;
  if (!chatID) {
    title = await generateTaitleResponse(message);
    chat = await ChatModel.create({
      user: req.user.id,
      title,
    });
  }

  const userMessage= await MessageModel.create({
    chat:chatID || chat._id,
    content:message,
    role:"user"
  })

  const messages= await MessageModel.find({chat:chatID || chat._id})

  const result=await generateMsgResponse(messages)

  const aiMessage=await MessageModel.create({
    chat:chatID || chat._id,
    content:result,
    role:"ai"
  })

  

  res.status(201).json({
    title,
    chat,
    aiMessage
  });
};
