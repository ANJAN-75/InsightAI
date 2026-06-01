import axios from "axios"

const api=axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export const sendMessage=async({message,chatID})=>{
       const response=await api.post("/api/chat/messsage",{
        message,
        chatID
       }) 
       return response.data
}

export const getChat=async()=>{
    const response=await api.get("/api/chat/")

    return response.data
}

export const getMessage=async(chatID)=>{
    const response=await api.get(`/api/chat/${chatID}/message`)

    return response.data
}

export const deleteChat=async(chatID)=>{
    const response =await api.delete(`/api/chat/delete/${chatID}`)

    return response.data
}
