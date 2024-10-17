import React from "react";
import laptop1 from "/src/Images/landing page/laptop1.png";
import logo from "/src/Images/landing page/logo3.png";

const Header = () => {
  return (
    <div className="bg-[#603998] flex flex-col items-center">
      <div className="bg-[#603998] w-full px-2 md:w-[800px]">
        <div className="bg-[#baaad3] mx-auto flex justify-between items-center rounded-full p-4 mt-10">
          <img src={logo} alt="logo" className="h-6 md:h-10 mx-5" />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-[#603998] rounded-full text-md md:text-xl text-white font-semibold px-6 py-3 hover:bg-white hover:text-black">
              Login
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center mt-10 md:mt-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white text-center font-extrabold leading-tight">
            World's First Candidate Tracking System
          </h2>
          <p className="text-lg md:text-2xl text-white mt-5 text-center">
            Check with our CTS whether you should HIRE or NOT!
          </p>
          <a
            href="https://calendly.com/jai-talentid/demo-talent-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-gray-400 text-black text-md md:text-xl hover:bg-[#2b1b44] hover:text-white mt-4 px-5 md:px-7 py-3 mb-0 rounded-full font-bold">
              Book a Demo
            </button>
          </a>
        </div>
        <div className="mt-16 md:mt-36 mb-16 md:mb-36 flex justify-center">
          <img
            src={laptop1}
            alt="laptop"
            className="w-full md:w-auto transform scale-100 md:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
