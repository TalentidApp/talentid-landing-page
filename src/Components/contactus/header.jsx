import React from "react";

const Header = () => {
  return (
    <div className="bg-white text-black">
      <nav className="py-10 px-4">
        <div className="max-w-3xl mx-auto px-9 py-3 flex items-center justify-between rounded-3xl shadow-md bg-gradient-to-r from-gray-300 to-white">
          <div className="flex items-center">
            <img
              src="/src/Images/landing page/logo3.png"
              alt="Employia Logo"
              className="h-10"
            />
          </div>
          <div>
            <button className="bg-purple-800 text-white px-8 py-3 rounded-full font-bold">
              Log in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
