import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function AddForm() {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
      {/* Popup Container with subtle scale animation */}
      <div
        className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl w-full max-w-md relative border
      border-gray-100 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={() => setIspopupOpen(false)}
          className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200
        hover:scale-110 border border-gray-200"
          aria-label="Close"
        >
          <FaTimes className="text-gray-500 text-lg" />
        </button>

        {/* Header with Icon */}
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3
              13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">New Private Chat</h2>
          <p className="text-gray-500 mt-2">
            Connect with friends or colleagues
          </p>
        </div>

        {/* Enhanced Form */}
        <form className="space-y-5">
          {/* Floating Label Input */}
          <div className="relative">
            <input
              type="text"
              id="chatName"
              className="peer w-full p-4 pt-6 font-light bg-white border border-gray-200 rounded-xl outline-none transition
            focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
              placeholder=" "
              required
            />
            <label
              htmlFor="chatName"
              className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:text-sm
            peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs"
            >
              Username or Email *
            </label>
          </div>

          {/* Message Input with Character Counter */}
          <div className="relative">
            <textarea
              id="initialMessage"
              rows={3}
              maxLength={200}
              className="peer w-full p-4 pt-6 font-light bg-white border border-gray-200 rounded-xl outline-none transition
            focus:border-blue-500 focus:ring-1 focus:ring-blue-200 resize-none"
              placeholder=" "
            />
            <label
              htmlFor="initialMessage"
              className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:text-sm
            peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs"
            >
              Initial Message (Optional)
            </label>
            <span className="absolute bottom-2 right-3 text-xs text-gray-400">
              0/200
            </span>
          </div>

          {/* Privacy Notice with Icon */}
          <div className="flex items-start gap-2 text-xs text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p>
              Your messages are end-to-end encrypted.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </p>
          </div>

          {/* Animated Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white
          font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Start Private Chat
          </button>
        </form>
      </div>
    </div>
  );
}
