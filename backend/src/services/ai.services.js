import { ChatMistralAI } from "@langchain/mistralai";
import {
  SystemMessage,
  HumanMessage,
  AIMessage,
  tool,
  createAgent,
} from "langchain";
import { searchInternet } from "./internet.services.js";
import * as z from "zod";

const model = new ChatMistralAI({
  model: "mistral-small-latest",
});

const searchInternetTool = tool(searchInternet, {
  name: "search_Internet",
  description:
    "A web search tool that retrieves current and up-to-date information from the internet. Use it for questions about recent events, breaking news, latest updates, current prices, weather, sports results, company announcements, technology developments, and any topic requiring real-time data.",
  schema: z.object({
    query: z.string().describe("The search query to look up on the internet."),
  }),
});

const agent = createAgent({
  model: model,
  tools: [searchInternetTool],
});

export const generateMsgResponse = async (msgs) => {
  const response = await agent.invoke({
    messages: [
      new SystemMessage(`
                You are a helpful assistant.

When using search_Internet:
- Treat search results as the primary source of truth.
- Do not guess.
- If results conflict, mention the conflict.
- Prefer the most recent information.
- Cite the source titles when possible.

            `),
      ...msgs.map((msg) => {
        if (msg.role == "user") {
          return new HumanMessage(msg.content);
        } else if (msg.role == "ai") {
          return new AIMessage(msg.content);
        }
      }),
    ],
  });
  console.log(response.messages)
  return response.messages[ response.messages.length - 1 ].text;
};

const systemMsg = new SystemMessage(`You are a title generation assistant.

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
Output: DBMS Normalization Guide`);

export const generateTaitleResponse = async (msg) => {
  const response = await model.invoke([systemMsg, new HumanMessage(msg)]);
  return response.text;
};
