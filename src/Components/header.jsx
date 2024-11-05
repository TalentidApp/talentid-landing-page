import React from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_FRONTEND_URL;

  const handleOpenNewTab = () => {
    // Open a new tab with the specified URL
    window.open(`${apiUrl}/login`, '_blank');

  };
  
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
            <button className="bg-purple-800 text-white px-8 py-3 rounded-full font-bold" onClick={handleOpenNewTab}>
              Log in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
