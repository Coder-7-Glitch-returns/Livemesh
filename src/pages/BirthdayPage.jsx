import React from "react";

export default function BirthdayPage() {
  return (
    <section
      className="flex items-center justify-center flex-col min-h-screen text-white bg-gradient-to-br from-[#74b9ff]
    via-[#0984e3] to-[#6c5ce7]"
    >
      <h1 className="text-3xl font-semibold font-family-heading mb-6">
        Your Birthday
      </h1>
      <p className="text-lg text-center text-heading-paragraph">
        This way you and other people will be able to find each other by their
        age
      </p>
      <div className="w-[368px] h-[212px] rounded-4xl bg-white mt-6">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center gap-4">
            <input
              type="date"
              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#0984e3] bg-white text-gray-800 font-medium
              shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0984e3]/20 transition-all duration-200 ease-in-out
              placeholder-gray-400 cursor-pointer
  "
            />
            <button
              className="bg-gradient-to-r from-[#0984e3] to-[#06b6d4] text-white px-8 py-4 rounded-full text-lg font-semibold
              shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gradient-to-r
            hover:from-[#0873c7] hover:to-[#05a5c0] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0984e3]
            focus:ring-opacity-50"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
