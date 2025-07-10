import React, { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";
import {
  useParams,
  useNavigate,
  useOutletContext,
  Link,
} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaUser, FaBellSlash, FaLock, FaTrash } from "react-icons/fa6";

export default function ChatCard() {
  // Sample chat data
  // In a real application, this would be fetched from an API or database
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
      {
        id: 3,
        sender: "Charlie Brown",
        text: "See you tomorrow at the conference room",
        time: "Yesterday",
        isMe: false,
      },
    ],
  };
  const { setShowSidebar } = useOutletContext(); // Assuming this is passed from a parent component to control sidebar visibility
  const { chatId } = useParams(); // Get the chatId from the URL parameters
  const { senderId } = useParams(); // Get the senderId from the URL parameters
  const navigate = useNavigate(); // Use navigate to programmatically change routes
  const [messages, setMessages] = useState([]); // Initialize messages state
  const [newMessage, setNewMessage] = useState(""); // State for new message input
  const [loading, setLoading] = useState(true); // Loading state to show loading spinner
  const [error, setError] = useState(null); // Error state to handle chat not found or other errors
  const messagesEndRef = useRef(null); // Ref to scroll to the bottom of the messages container
  const [isDropdownToggle, setIsDropdownToggle] = useState(false);

  // Effect to fetch chat data based on chatId
  useEffect(() => {
    setLoading(true);
    setError(null);
    // Simulate fetching chat data with a timeout
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
  // Effect to scroll to the bottom of the messages when they change
  // This ensures that the latest message is always visible
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  // Function to scroll to the bottom of the messages container
  // This is called after messages are updated to ensure the latest message is visible
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Function to handle sending a new message
  // It checks if the new message is not empty, creates a message object, and updates
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
  // Function to handle going back to the chat list
  // It navigates to the "/chat" route and shows the sidebar if on a small
  const handleBack = () => {
    navigate("/chat");
    if (window.innerWidth < 1024 && setShowSidebar) {
      setShowSidebar(true);
    }
  };
  // If there's an error or loading, show a loading spinner or error message
  // This is a simple loading state that can be enhanced with a spinner or skeleton loader
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
    <div className="flex flex-col h-screen lg:w-[75%] w-full">
      {/* Header with Back Button and Chat Info */}
      <div
        className="sticky top-0 z-10 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md p-4 border-b border-gray-200 flex
      items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-200 group"
            aria-label="Back"
          >
            <FaArrowLeft className="text-blue-600 group-hover:text-blue-800 transition-colors" />
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center
              text-white font-medium"
              >
                {messages[0]?.sender.charAt(0)}
              </div>
              {messages[0]?.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {messages[0]?.sender}
              </h2>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span>
                  {messages.length}{" "}
                  {messages.length === 1 ? "message" : "messages"}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  {messages[0]?.isOnline ? (
                    <>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Online
                    </>
                  ) : (
                    "Last seen recently"
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 relative">
          <button
            className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-200 relative"
            onClick={() => setIsDropdownToggle(!isDropdownToggle)}
            aria-label="More options"
          >
            <FaEllipsisVertical className="text-blue-600" />
          </button>
          {isDropdownToggle && (
            <div
              className="absolute right-0 bg-white shadow-xl rounded-lg mt-2 w-56 top-10 border border-gray-100 overflow-hidden
            animate-fade-in"
            >
              <ul className="py-1">
                <Link to={`/senderProfile/${chatId}`}>
                  <li
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-3 text-gray-700 hover:text-blue-600
                    transition-colors"
                    onClick={() => setIsDropdownToggle(false)}
                  >
                    <FaUser className="text-blue-500" />
                    View Profile
                  </li>
                </Link>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-3 text-gray-700 hover:text-blue-600
                  transition-colors"
                  onClick={() => setIsDropdownToggle(false)}
                >
                  <FaBellSlash className="text-blue-500" />
                  Mute Notifications
                </li>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-3 text-gray-700 hover:text-blue-600
                  transition-colors"
                  onClick={() => setIsDropdownToggle(false)}
                >
                  <FaLock className="text-blue-500" />
                  Block User
                </li>
                <Link to={"/chat"}>
                  <li
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-3 text-red-600 transition-colors"
                    onClick={() => setIsDropdownToggle(false)}
                  >
                    <FaTrash className="text-red-500" />
                    Delete Chat
                  </li>
                </Link>
              </ul>
            </div>
          )}
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
      {/* Input Area for New Message */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <div>
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
    </div>
  );
}
