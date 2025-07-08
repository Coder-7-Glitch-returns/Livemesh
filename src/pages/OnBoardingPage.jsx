import React from "react";

export default function OnBoardingPage() {
  return (
    <section>
      <div className="flex items-center justify-center h-[100vh] text-center">
        <div></div>
        <div className="space-y-3">
          <div>
            <h1 className="text-[40px] font-bold font-family-heading">
              Livemesh
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold font-family-heading">
              Welcome To Livemesh
            </h1>
          </div>
          <div>
            <p className="text-lg font-medium font-family-default text-heading-paragraph">
              Connect, chat, and stay close to the people who matter.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="font-family-btn font-semibold bg-[linear-gradient(45deg,#4F6BED,#8458F4)] text-white w-[150px] h-[42px] rounded-lg
            hover:shadow-[0_4px_12px_#4F6BED4D] hover:translate-y-[-2px] transition ease-linear duration-200 text-[15px]"
            >
              Call To Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
