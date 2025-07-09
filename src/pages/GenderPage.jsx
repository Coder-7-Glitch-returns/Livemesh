import React, { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ChatCard({ setShowSidebar }) {
  const chatData = {
    1: [
      {
        id: 1,
        sender: "John Doe",
        text: "Hey there!",
        time: "10:30 AM",
        isMe: false,
      },
      {
        id: 2,
        sender: "You",
        text: "Hi John! How are you?",
        time: "10:32 AM",
        isMe: true,
      },
      {
        id: 3,
        sender: "John Doe",
        text: "I'm good, thanks! Just wanted to check if you've reviewed the project proposal yet?",
        time: "10:33 AM",
        isMe: false,
      },
      {
        id: 4,
        sender: "John Doe",
        text: "We need to finalize it by tomorrow.",
        time: "10:34 AM",
        isMe: false,
      },
    ],
    2: [
      {
        id: 1,
        sender: "Jane Smith",
        text: "About tomorrow's meeting",
        time: "09:15 AM",
        isMe: false,
      },
      {
        id: 2,
        sender: "You",
        text: "Yes, what about it?",
        time: "09:20 AM",
        isMe: true,
      },
      {
        id: 3,
        sender: "Jane Smith",
        text: "Can we reschedule to 3 PM? I have a doctor's appointment in the morning.",
        time: "09:22 AM",
        isMe: false,
      },
    ],
    3: [
      {
        id: 1,
        sender: "Charlie Brown",
        text: "New project kickoff is scheduled for next Monday at 10 AM",
        time: "Yesterday",
        isMe: false,
      },
      {
        id: 2,
        sender: "You",
        text: "Looking forward to it! I've prepared some initial ideas we can discuss.",
        time: "Yesterday",
        isMe: true,
      },
    ],
  };

  const { chatId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timeout = setTimeout(() => {
      const data = chatData[chatId];
      if (!data) {
        setError("Chat not found");
        navigate("/chat");
      } else {
        setMessages(data);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [chatId, navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const msg = {
      id: messages.length + 1,
      sender: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isMe: true,
    };
    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
  };

  const handleBack = () => {
    if (location.pathname !== "/chat") {
      navigate("/chat");
      setShowSidebar(true);
    }
  };

  if (error || loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-50">
        {error ? (
          <div className="text-center">
            <p className="text-red-500 text-lg font-medium mb-4">{error}</p>
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
            >
              <FaArrowLeft /> Back to Chats
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="animate-pulse text-gray-500 mb-2">
              Loading conversation...
            </div>
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen lg:w-[75%] w-full bg-gray-50">
      {/* Chat Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm p-4 border-b">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {messages[0]?.sender}
            </h2>
            <p className="text-xs text-gray-500">
              {messages.length} messages •{" "}
              {messages[0]?.isOnline ? "Online" : "Last seen recently"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {messages.map(({ id, sender, text, time, isMe }) => (
            <div
              key={id}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] lg:max-w-[70%] px-4 py-2 rounded-xl ${
                  isMe
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-white text-gray-800 shadow-sm rounded-tl-none"
                }`}
              >
                {!isMe && (
                  <div className="font-medium text-sm text-gray-700 mb-1">
                    {sender}
                  </div>
                )}
                <p className="text-sm sm:text-base break-words">{text}</p>
                <div
                  className={`text-xs mt-1 text-right ${
                    isMe ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {time}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <div className="flex items-center bg-white rounded-lg shadow-sm border p-1">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 border-none px-4 py-2 focus:ring-0 rounded-lg outline-none text-gray-800 placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={`p-2 rounded-lg flex items-center justify-center ${
              newMessage.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } transition-colors`}
          >
            <IoSend className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
