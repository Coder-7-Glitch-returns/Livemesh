import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlus, FaUser, FaTimes } from "react-icons/fa";
import mockData from "./data/mockData.json";
import MockDataCard from "./cards/mockDataCard"; // Import the card component

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const [searchTerm, setSearchTerm] = useState(""); // Fixed naming convention
  const [selectedUser, setSelectedUser] = useState(null); // Fixed naming convention
  const location = useLocation(); // Use useLocation to get the current path
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Fixed naming convention
  // Filter users based on search term
  const filteredUsers = mockData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Function to handle user selection
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };
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
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div>
            <h4 className="text-xl font-bold text-gray-800">Messages</h4>
            <p className="text-xs text-gray-500">
              {mockData.reduce((a, c) => a + c.unread, 0)} unread messages
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => {
                  setIsPopupOpen(true);
                }}
                className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-200"
              >
                <FaPlus className="text-blue-600 text-sm" />
              </button>
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
              isOnline={chat.isOnline}
            />
          ))}
        </div>
      </div>

      {/* Popup for new private chat */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          {/* Glassmorphism Card */}
          <div
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-white/20 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Gradient Accent */}
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="flex justify-between items-center p-6 pb-4">
                <div>
                  <h3 className="sm:text-2xl text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Connect with Users
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Start a private conversation
                  </p>
                </div>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100/50 transition-all transform hover:rotate-90 duration-300"
                >
                  <FaTimes className="text-gray-500 hover:text-gray-700 text-lg" />
                </button>
              </div>
            </div>

            {/* Floating Search Bar */}
            <div className="px-6 pb-2 -mt-2">
              <div className="relative shadow-sm">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full p-3 pl-12 bg-white/80 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/50 transition-all duration-300 shadow-sm"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-4 top-3.5">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* User List with Card Layout */}
            <div className="overflow-y-auto max-h-[50vh] px-4 pb-2">
              {filteredUsers.length > 0 ? (
                <div className="grid gap-2">
                  {filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className={`group relative ${
                        selectedUser?.id === user.id
                          ? "bg-white border-gray-100 shadow-md -translate-y-0.5"
                          : "bg-white/80 hover:bg-white border-gray-100"
                      } border rounded-xl p-3 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
                      onClick={() => {
                        handleUserSelect(user);
                        setSelectedUser(user);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-sm"
                          />
                          <span
                            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                              user.isOnline ? "bg-emerald-400" : "bg-gray-300"
                            }`}
                          ></span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-gray-800 truncate">
                              {user.name}
                            </h4>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                user.isOnline
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {user.isOnline ? "Online" : "Offline"}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 truncate max-w-[180px]">
                            {user.lastMessage}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200/50 transition-all pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="relative mb-4">
                    <svg
                      className="h-16 w-16 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="h-8 w-8 text-blue-500 animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-gray-700">
                    No matches found
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Try a different search term or invite new friends
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 pt-4">
              <button
                onClick={() => {
                  setIsPopupOpen(false);
                  setSelectedUser(null);
                }}
                className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Start New Conversation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 group-hover:bg-white/0 transition-all duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
