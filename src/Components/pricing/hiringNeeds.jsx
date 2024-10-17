import React from "react";

const HiringNeeds = () => {
  return (
    <div className="bg-purple-700 p-5 sm:p-10 flex flex-col sm:flex-row justify-around items-center rounded-lg">
      <div className="flex flex-col sm:flex-row items-center">
        <img
          src="/src/Images/pricing/hiring.png"
          alt="Hiring"
          className="h-32 w-48 sm:h-40 sm:w-60"
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            Talk to us about your Hiring needs
          </h2>
        </div>
      </div>
      <a href="https://calendly.com/jai-talentid/demo-talent-id" className="mt-4 sm:mt-0 bg-white text-purple-800 py-4 px-10 sm:py-6 sm:px-20 rounded-full font-bold text-lg sm:text-xl">
        Book a Demo
      </a>
    </div>
  );
};

export default HiringNeeds;
