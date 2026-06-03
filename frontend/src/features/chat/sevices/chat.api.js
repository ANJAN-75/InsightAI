import axios from "axios"

const api=axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export const sendMessage=async({message,chatID})=>{
       const response=await api.post("/api/chat/message",{
        message,
        chatID
       }) 
       return response.data
}

export const getChats=async()=>{
    const response=await api.get("/api/chat/")
    console.log(response.data)
    return response.data
    
}

export const getMessage=async(chatID)=>{
    const response=await api.get(`/api/chat/${chatID}/messages`)

    return response.data
}

export const deleteChat=async(chatID)=>{
    const response =await api.delete(`/api/chat/delete/${chatID}`)

    return response.data
}
