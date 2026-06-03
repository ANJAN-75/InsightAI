import {
  setChats,
  setCurrentChatId,
  setError,
  setLoading,
  createNewChat,
  addNewMessage,
  addMessages,
} from "../chat.slice";
import { useDispatch } from "react-redux";
import {
  sendMessage,
  getChats,
  getMessage,
  deleteChat,
} from "../sevices/chat.api";

export const useChat = () => {
  const dispatch = useDispatch();

  const handleSendMessage = async ({ message, chatID }) => {
     dispatch(setLoading(true))
    const data = await sendMessage({ message, chatID });
    const { chat, aiMessage } = data;
    if (!chatID) {
      dispatch(
        createNewChat({
          chatID: chat._id,
          title: chat.title,
        }),
      );
    }
    dispatch(
      addNewMessage({
        chatID: chatID || chat._id,
        content: message,
        role: "user",
      }),
    );
    dispatch(
      addNewMessage({
        chatID: chatID || chat._id,
        content: aiMessage.content,
        role: "ai",
      }),
    );
    dispatch(setCurrentChatId(chat._id));
    dispatch(setLoading(false))
  };
  const handleGetChats=async()=>{
    dispatch(setLoading(true))
    const data =await getChats()
    console.log(data)
    const {chats}=data
     dispatch(setChats(chats.reduce((acc, chat) => {
            acc[ chat._id ] = {
                id: chat._id,
                title: chat.title,
                messages: [],
                lastUpdated: chat.updatedAt,
            }
            return acc
        }, {})))
        dispatch(setLoading(false))
  }
   async function handleOpenChat(chatID, chats) {

        console.log(chats[ chatID ]?.messages.length)

        if (chats[ chatID ]?.messages.length === 0) {
            const data = await getMessage(chatID)
            const { messages } = data

            const formattedMessages = messages.map(msg => ({
                content: msg.content,
                role: msg.role,
            }))

            dispatch(addMessages({
                chatID,
                messages: formattedMessages,
            }))
        }
        dispatch(setCurrentChatId(chatID))
    }
     return {
        handleSendMessage,
        handleGetChats,
        handleOpenChat
    }
};
