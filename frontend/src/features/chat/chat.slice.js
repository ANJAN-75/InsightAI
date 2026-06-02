import { createSlice } from '@reduxjs/toolkit';

const chatSlice=createSlice({
  name:"chat",
  initialState:{
    chats:{},
    currentchatID:null,
    isLoading:false,
    error:null,
  },
  reducers:{
    createNewChat:(state,action)=>{
      const { chatID, title } = action.payload
      state.chats[chatID]={
        id:chatID,
        title:title,
        messages:[],
        lastUpdated: new Date().toISOString(),
      }
    },
    addNewMessage:(state,action)=>{
      const {chatID,content,role}=action.payload
      state.chats[chatID].messages.push({ content, role })
    },
    addMessages:(state,action)=>{
      const {chatID,messages}=action.payload
      state.chats[chatID].messages.push(...messages)
    },
    setChats:(state,action)=>{
      state.chats=action.payload
    },
    setCurrentChatId:(state,actions)=>{
      state.currentchatID=action.payload
    },
    setLoading: (state, action) => {
            state.isLoading = action.payload
        },
   setError: (state, action) => {
            state.error = action.payload
        },
  }
})

export const {
  createNewChat,
  addNewMessage,
  addMessages,
  setChats,
  setCurrentChatId,
  setLoading,
  setError
} = chatSlice.actions

export default chatSlice.reducer