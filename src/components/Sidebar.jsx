import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaUser } from "react-icons/fa6";

const mockChats = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "Hey, how about our meeting tomorrow?",
    time: "12:30 PM",
    unread: 1,
    avatar: "/Favicon.png",
    isOnline: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    lastMessage: "I've sent you the project files",
    time: "11:45 AM",
    unread: 0,
    avatar: "/Favicon.png",
    isOnline: false,
  },
  {
    id: "3",
    name: "Charlie Brown",
    lastMessage: "See you tomorrow at the conference room",
    time: "Yesterday",
    unread: 3,
    avatar: "/Favicon.png",
    isOnline: true,
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[400px] bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div>
          <h4 className="text-xl font-bold text-gray-800">Messages</h4>
          <p className="text-xs text-gray-500">
            {mockChats.reduce((a, c) => a + c.unread, 0)} unread messages
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-200"
            >
              <FaPlus className="text-blue-600 text-sm" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 border border-gray-100">
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700">
                  New Private Chat
                </div>
              </div>
            )}
          </div>
          <button className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm">
            <FaUser className="text-sm" />
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {mockChats.map(
          ({ id, name, lastMessage, time, unread, avatar, isOnline }) => (
            <Link to={`/chat/${id}`} key={id}>
              <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 mx-2 my-1 group">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    {isOnline && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-sm text-gray-800 truncate">
                        {name}
                      </p>
                      <p className="text-xs text-gray-400 ml-2 whitespace-nowrap">
                        {time}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500 truncate max-w-[180px]">
                        {lastMessage}
                      </p>
                      {unread > 0 && (
                        <div className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                          {unread}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
