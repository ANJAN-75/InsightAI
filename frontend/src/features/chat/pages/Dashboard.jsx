import React from "react";
import { ArrowUp, Paperclip } from "lucide-react";
const Dashboard = () => {
  const chats = [
    "Project Alpha Discussion",
    "Code Optimization Tips",
    "Creative Writing Prompt",
    "UI Design Feedback",
    "Market Analysis v2",
  ];

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-72 border-r border-zinc-800 bg-zinc-950">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-zinc-400 mb-6">
            Previous Chats
          </h2>

          <div className="space-y-2">
            {chats.map((chat, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-3 cursor-pointer rounded-lg hover:bg-zinc-900 transition-all duration-200"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex  flex-col">
        {/* Navbar */}
        <nav className="h-16  flex items-center px-8 font-mono">
          <h1 className="text-2xl font-bold ">inshit<span className="text-cyan-400 cursor-pointer  text-4xl font-bold">AI</span></h1>
        </nav>
        {/* Chat Area */}
        <main className="flex-1 flex flex-col justify-between">
          <div className="flex-1  w-4/5 mx-auto overflow-y-auto p-8">
            {/* User Message */}
            <div className="flex justify-end mb-6">
              <div className="bg-zinc-800 px-5 py-3 rounded-2xl rounded-br-none max-w-md font-medium">
                Can you help me analyze this data set?
              </div>
            </div>

            {/* AI Message */}
            <div className="flex justify-start mb-6">
              <div className="bg-zinc-800  rounded-bl-none px-5 py-3 rounded-2xl max-w-md">
                Of course! Please upload the file or paste the data here, and
                I'll get started.
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 ">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center bg-zinc-900 rounded-2xl px-4 py-3 border border-zinc-800">
                {/* Attachment */}
                <button className="text-zinc-400 hover:text-white text-xl cursor-pointer">
                  <Paperclip />
                </button>

                {/* Input */}
                <input
                  type="text"
                  placeholder="Message InsightAI..."
                  className="flex-1 bg-transparent outline-none px-4 text-white placeholder:text-zinc-500"
                />

                {/* Send */}
                <button className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-black w-11 h-11 rounded-full flex items-center justify-center font-bold transition">
                  <ArrowUp />
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
