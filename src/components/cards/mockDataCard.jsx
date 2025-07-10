import React from "react";
import { Link } from "react-router-dom";
export default function MockDataCard({
  id,
  name,
  lastMessage,
  time,
  unread,
  avatar,
  isOnline,
}) {
  return (
    <div>
      <Link to={`/chat/${id}`} className="block hover:no-underline">
        <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 mx-2 my-1 group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={avatar}
                alt={`${name}'s avatar`}
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
    </div>
  );
}
