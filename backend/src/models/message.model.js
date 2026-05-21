import mongoose  from "mongoose";

const messageSchema=new mongoose.Schema({
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"chat",
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["ai","user"],
        required:true
    }

},{timestamps:true}
)

const MessageModel=mongoose.model("message",messageSchema)


export default MessageModel
