import React, { useEffect, useState } from "react";
import { ArrowUp, Paperclip } from "lucide-react";
import { useChat } from "../hook/useChat";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

const Dashboard = () => {
  const chat = useChat();
  const [chatInput, setChatInput] = useState("");
  const chats = useSelector((state) => state.chat.chats);
  const currentChatId = useSelector((state) => state.chat.currentchatID);
  console.log("Chats:", chats);
  const currentChat = chats[currentChatId];
  const messages = currentChat?.messages || [];
  useEffect(() => {
    chat.handleGetChats();
  }, []);
  return (
    <div className="flex h-screen overflow-hidden  bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-72 border-r border-zinc-800 bg-zinc-950">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-zinc-400 mb-6">
            Previous Chats
          </h2>

          <div className="space-y-2">
            {Object.values(chats).map((chatitem) => (
              <button
                key={chatitem.id}
                onClick={() => {
                  chat.handleOpenChat(chatitem.id, chats);
                }}
                className="w-full text-left px-4 py-3 cursor-pointer rounded-lg hover:bg-zinc-900 transition-all duration-200"
              >
                {chatitem.title}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex  flex-col">
        {/* Navbar */}
        <nav className="h-16  flex items-center px-8 font-mono">
          <h1 className="text-2xl font-bold ">
            inshit
            <span className="text-cyan-400 cursor-pointer  text-4xl font-bold">
              AI
            </span>
          </h1>
        </nav>
        {/* Chat Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1  w-4/5 mx-auto overflow-y-auto p-8 hide-scrollbar">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-6 break-words whitespace-pre-wrap  ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-2xl max-w-[70%] overflow-hidden break-all whitespace-pre-wrap ${
                    message.role === "user"
                      ? "bg-zinc-800 rounded-br-none font-medium"
                      : " rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown>
                  {message.content}
                  </ReactMarkdown>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t  border-zinc-800 bg-zinc-950 p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3">
                <button className="text-zinc-400 hover:text-white transition cursor-pointer">
                  <Paperclip size={20} />
                </button>

                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Message InsightAI..."
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-zinc-500"
                />

                <button
                  onClick={() => {
                    if (!chatInput.trim()) return;

                    chat.handleSendMessage({
                      message: chatInput,
                      chatID: currentChatId,
                    });

                    setChatInput("");
                  }}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black transition cursor-pointer"
                >
                  <ArrowUp size={20} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
