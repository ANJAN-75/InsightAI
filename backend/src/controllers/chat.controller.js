import {
  generateMsgResponse,
  generateTaitleResponse,
} from "../services/ai.services.js";
import ChatModel from "../models/chat.model.js";
import MessageModel from "../models/message.model.js";

export const createChatController = async (req, res) => {
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

  const userMessage = await MessageModel.create({
    chat: chatID || chat._id,
    content: message,
    role: "user",
  });

  const messages = await MessageModel.find({ chat: chatID || chat._id });

  const result = await generateMsgResponse(messages);

  const aiMessage = await MessageModel.create({
    chat: chatID || chat._id,
    content: result,
    role: "ai",
  });

  res.status(201).json({
    title,
    chat,
    aiMessage,
  });
};

export const getChatController = async (req, res) => {
  const userID = req.user.id;

  const chats = await ChatModel.find({ user: userID });

  res.status(200).json({
    message: "chat recive sucessfully",
    chats,
  });
};

export const getMessageController = async (req, res) => {
  const { chatID } = req.params;
  const chat = await ChatModel.findOne({
    _id: chatID,
    user: req.user.id,
  });

  if (!chat) {
    return res.status(404).json({
      message: "Chat not found",
    });
  }
  const messages = await MessageModel.find({ chat: chatID });
  res.status(200).json({
    message: "message recive sucessfully",
    messages,
  });
};

export const deleteChatController = async (req, res) => {
  const { chatID } = req.params;
  const chat = await ChatModel.findOneAndDelete({
    _id: chatID,
    user: req.user.id,
  });
  await MessageModel.deleteMany({
    chat: chatID,
  });
  if (!chat) {
    return res.status(404).json({
      message: "Chat not found",
    });
  }
  res.status(200).json({
    message: "Chat deleted successfully",
  });
};
