import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Link } from "react-router";

export default function BirthdayPage() {
  return (
    <section
      className="flex items-center justify-center flex-col min-h-screen text-white bg-gradient-to-br from-[#74b9ff]
    via-[#0984e3] to-[#6c5ce7] overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-ping delay-300"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-white/20 rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="mb-6 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/20 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <img src="/Favicon.png" alt="" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mt-8 mb-4 animate-gradient bg-white bg-clip-text text-transparent bg-300% animate-gradient-x">
          Livemesh
        </h1>

        <div className="flex justify-center mb-6">
          <div className="h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full animate-expand w-24"></div>
        </div>
      </div>

      {/* Welcome section with staggered animation */}
      <div className="mb-6 space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 animate-fade-in-up delay-200">
          Your Birthday
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto animate-fade-in-up delay-400">
          This way you and other people will be able to find each other by their
          age
        </p>
      </div>
      <div className="w-[368px] h-[212px] rounded-4xl bg-white mt-6 z-10">
        <div className="flex items-center justify-center h-full">
          <form className="flex flex-col items-center gap-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker defaultValue={dayjs("2022-04-17")} />
            </LocalizationProvider>
            <Link to={"/chat"}>
              <button
                className="bg-gradient-to-r from-[#0984e3] to-[#06b6d4] text-white px-8 py-4 rounded-full text-lg font-semibold
              shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gradient-to-r
            hover:from-[#0873c7] hover:to-[#05a5c0] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0984e3]
            focus:ring-opacity-50"
              >
                Continue
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
