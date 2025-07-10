import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlus, FaUser, FaTimes } from "react-icons/fa";
import AddForm from "./AddForm";
import mockData from "./data/mockData.json";
import MockDataCard from "./cards/mockDataCard"; // Import the card component

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Fixed naming convention

  useEffect(() => {
    if (location.pathname !== "/chat") {
      setShowSidebar(false);
    }
  }, [location, setShowSidebar]);

  return (
    <>
      <div
        className={`lg:w-[25%] w-full bg-white border-r border-gray-200 flex flex-col h-full lg:relative fixed lg:top-0 top-0 left-0 z-20 transition-all duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div>
            <h4 className="text-xl font-bold text-gray-800">Messages</h4>
            <p className="text-xs text-gray-500">
              {mockData.reduce((a, c) => a + c.unread, 0)} unread messages
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
                  <div
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700"
                    onClick={() => {
                      setIsPopupOpen(true);
                      setOpen(false);
                    }}
                  >
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
          {mockData.map((chat) => (
            <MockDataCard
              key={chat.id}
              id={chat.id}
              name={chat.name}
              lastMessage={chat.lastMessage}
              time={chat.time}
              unread={chat.unread}
              avatar={chat.avatar}
              isOnline={chat.isOnline}
            />
          ))}
        </div>
      </div>

      {/* Popup for new private chat */}
      {isPopupOpen && <AddForm onClose={() => setIsPopupOpen(false)} />}
    </>
  );
}
