import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        chat:{},
        currentChatId:null,
        isLoading:false,
        error:null
    },
    reducers:{
        createNewChat:(state,actions)=>{

        }
    }
})