import { ChatMistralAI } from "@langchain/mistralai";
import { SystemMessage,HumanMessage,AIMessage} from "langchain"


const model = new ChatMistralAI({
  model: "mistral-small-latest",
});

export const generateMsgResponse = async (msgs) => {
  const response = await model.invoke(msgs.map((msg)=>{
    if(msg.role=="user"){
        return new HumanMessage(msg.content) 
    }else if(msg.role=="ai"){
        return new AIMessage(msg.content)
    }
  }));

  return response.text;
};

const systemMsg=new SystemMessage(`You are a title generation assistant.

Your task is to generate a concise title for the user's input.

Rules:
- Title must be 2 to 4 words only.
- Capture the main topic or intent.
- Use clear, natural language.
- Do not use punctuation unless necessary.
- Do not include explanations, quotes, or extra text.
- Return only the title.

Examples:
Input: "How do I learn Redux Toolkit effectively?"
Output: Redux Learning Guide

Input: "Build a real-time chat application with Socket.IO"
Output: Real Time Chat

Input: "DBMS normalization explained with examples"
Output: DBMS Normalization Guide`)


export const generateTaitleResponse = async(msg)=>{
    const response= await model.invoke([systemMsg,new HumanMessage(msg)])

    return response.text
}