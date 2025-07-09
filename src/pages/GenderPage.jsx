import React, { useState } from "react";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { Link } from "react-router";

export default function GenderPage() {
  const [selectedGender, setSelectedGender] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setShowButton(true);
  };
  return (
    <section
      className="flex items-center justify-center flex-col min-h-screen text-white bg-gradient-to-br from-[#74b9ff]
    via-[#0984e3] to-[#6c5ce7]"
    >
      <h1 className="text-3xl font-semibold font-family-heading mb-6">
        How do you identiy yourself?
      </h1>
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-[10px] mb-[10px]">
          {/* Female Option */}
          <div
            className={`bg-[#FFFFFFCC] lg:w-[179px] h-[125px] shadow-[0px_5px_20px_0px_#00000026] rounded-3xl flex items-center
              justify-center flex-col space-y-3 cursor-pointer transition-all ${
                selectedGender === "female" ? "ring-2 ring-[#0984e3]" : ""
              }`}
            onClick={() => handleGenderSelect("female")}
          >
            <IoMdFemale
              className={`text-5xl ${
                selectedGender === "female"
                  ? "text-[#0984e3]"
                  : "text-[#0984e370]"
              }`}
            />
            <p
              className={`text-2xl ${
                selectedGender === "female"
                  ? "text-black font-medium"
                  : "text-gray-500"
              }`}
            >
              Female
            </p>
          </div>
          {/* Male Option */}
          <div
            className={`bg-[#FFFFFFCC] lg:w-[179px] h-[125px] shadow-[0px_5px_20px_0px_#00000026] rounded-3xl flex items-center
              justify-center flex-col space-y-3 cursor-pointer transition-all ${
                selectedGender === "male" ? "ring-2 ring-[#0984e3]" : ""
              }`}
            onClick={() => handleGenderSelect("male")}
          >
            <IoMdMale
              className={`text-5xl ${
                selectedGender === "male"
                  ? "text-[#0984e3]"
                  : "text-[#0984e370]"
              }`}
            />
            <p
              className={`text-2xl ${
                selectedGender === "male"
                  ? "text-black font-medium"
                  : "text-gray-500"
              }`}
            >
              Male
            </p>
          </div>
        </div>
        {/* Continue Button (appears when a gender is selected) */}
        {showButton && (
          <Link to={'/birthday'}>
            <button
              className="bg-gradient-to-r from-[#0984e3] to-[#06b6d4] text-white px-8 py-4 rounded-full text-lg font-semibold
          shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gradient-to-r
          hover:from-[#0873c7] hover:to-[#05a5c0] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0984e3]
          focus:ring-opacity-50"
            >
              Continue
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}
