"use client";

import { Link } from "react-router";

export default function OnBoardingPage() {
  return (
    <section className="bg-gradient-to-br from-[#74b9ff] via-[#0984e3] to-[#6c5ce7] min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 sm:block hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-ping delay-300"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-white/20 rotate-45 animate-spin-slow sm:block hidden"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-white/20 rounded-full animate-pulse delay-500 sm:block hidden"></div>
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-lg mx-auto text-center">
        {/* Animated logo section */}
        <div className="mb-12">
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
        <div className="mb-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 animate-fade-in-up delay-200">
            Welcome to the Future
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto animate-fade-in-up delay-400">
            Connect, chat, and stay close to the people who matter most.
            Experience seamless communication.
          </p>
        </div>

        {/* Google button with enhanced animations */}
        <div className="animate-fade-in-up delay-600">
          <Link to={"/gender"}>
            <button
              type="button"
              className="group relative inline-flex items-center justify-center gap-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-indigo-300 text-gray-700 font-medium py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform-gpu min-w-[280px]"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Google logo with animation */}
              <div className="relative transform group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>

              <span className="sm:text-lg font-medium relative">
                Continue with Google
              </span>

              {/* Arrow animation */}
              <div className="transform group-hover:translate-x-1 transition-transform duration-200">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </div>
        <div className="mt-12 animate-fade-in-up delay-800">
          <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
            </div>
            <span className="font-medium">Trusted by thousands worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
