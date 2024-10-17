import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-white py-8 sm:py-10 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-4 sm:mb-6 text-center">
        Ready to dive in?
      </h2>
      <button className="bg-black text-white py-3 px-8 sm:py-2 sm:px-12 rounded-full text-base sm:text-lg mb-3">
        Get Started 
      </button>
      <p className="text-gray-500 text-sm sm:text-base underline">
        No credit card required
      </p>
    </div>
  );
};

export default CallToAction;
