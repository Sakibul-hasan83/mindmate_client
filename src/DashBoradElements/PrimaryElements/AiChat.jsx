import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiCpu } from 'react-icons/fi';

const AiChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { 
      text: input, 
      sender: 'user', 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages((prev) => [...prev, userMessage]);
    
    const currentInput = input;
    setInput(""); 

    // Simulate AI Response
    setTimeout(() => {
      const aiResponse = { 
        text: `I'm here to support you. You mentioned: "${currentInput}". Tell me more about how you're feeling.`, 
        sender: 'ai', 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-white dark:bg-[#0f172a] rounded-3xl overflow-hidden border border-slate-200 dark:border-gray-800 shadow-xl mx-4 my-2 transition-colors duration-300">
      
      {/* Welcome Screen */}
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-500">
          <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 border border-teal-500/20">
            <FiCpu className="text-4xl text-teal-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2 tracking-tight">Hi! I'm MindMate</h1>
          <p className="text-teal-600 dark:text-teal-400 font-semibold mb-6">Your mental health companion created by Team Eternity.</p>
          <p className="max-w-lg text-slate-500 dark:text-gray-400 leading-relaxed text-sm">
            I'm here to listen and support you. Feel free to share what's on your mind. Everything you say is confidential.
          </p>
        </div>
      ) : (
        /* Chat Messages List */
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
              <div className={`max-w-[75%] p-4 rounded-2xl shadow-sm ${
                msg.sender === 'user' 
                ? 'bg-teal-500 text-white rounded-tr-none' 
                : 'bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-gray-200 rounded-tl-none border border-slate-200 dark:border-gray-700'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span className={`text-[10px] mt-2 block text-right ${msg.sender === 'user' ? 'text-teal-100' : 'text-slate-400 dark:text-gray-500'}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>
      )}

      {/* Input Section */}
      <div className="p-6 bg-slate-50 dark:bg-[#0f172a] border-t border-slate-200 dark:border-gray-800/50">
        <form onSubmit={handleSendMessage} className="flex gap-3 max-w-4xl mx-auto items-center">
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-white dark:bg-gray-900 border border-slate-300 dark:border-teal-500/30 rounded-xl py-4 px-6 text-slate-800 dark:text-white outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 shadow-sm"
            />
          </div>
          <button 
            type="submit"
            disabled={!input.trim()}
            className="bg-teal-500 hover:bg-teal-600 disabled:bg-slate-200 dark:disabled:bg-gray-800 disabled:text-slate-400 dark:disabled:text-gray-600 text-white dark:text-[#0f172a] w-14 h-14 flex items-center justify-center rounded-xl transition-all shadow-lg shadow-teal-500/20 group"
          >
            <FiSend className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
        <p className="text-center text-[10px] text-slate-400 dark:text-gray-600 mt-4 tracking-widest uppercase font-bold">
          MindMate AI: Supportive Conversation • Private • Secure
        </p>
      </div>
    </div>
  );
};

export default AiChat;