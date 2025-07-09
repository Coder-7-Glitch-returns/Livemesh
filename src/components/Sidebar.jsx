import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState();
  return (
    <div className="bg-white shadow-lg rounded-r-xl w-[400px] h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 pb-4">
        <div>
          <h4 className="text-2xl font-bold text-gray-800">Messages</h4>
          <p className="text-sm text-gray-500 mt-1">3 unread messages</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <FaPlus className="text-lg text-blue-600" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  New Chat
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <hr className="border-gray-100" />
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto py-2 px-4">
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors active:bg-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/Favicon.png"
                alt="User Avatar"
                className="rounded-full w-12 h-12 object-cover border-2 border-white shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-800">
                User 1
              </span>
              <p className="text-xs text-gray-500 truncate w-[200px]">
                Hey, how about our meeting tomorrow?
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs text-gray-400">12:30 PM</p>
            <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
