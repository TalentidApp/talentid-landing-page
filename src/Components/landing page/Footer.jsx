import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Product</h4>
            <ul className="list-none">
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  Integration
                </a>
              </li>
              <li className="mb-1">
                <Link to="/pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Resources</h4>
            <ul className="list-none">
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  Content Hub
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  API documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Company</h4>
            <ul className="list-none">
              <li className="mb-1">
                <Link to="/aboutus" className="text-gray-400 hover:text-white">
                  About us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/contactus"
                  className="text-gray-400 hover:text-white"
                >
                  Contact us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/partnership"
                  className="text-gray-400 hover:text-white"
                >
                  Partnerships
                </Link>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-extrabold mb-2">Legal</h4>
            <ul className="list-none">
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-400 hover:text-white">
                  Refund policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <p className="text-center mb-2 text-lg">
            Made with <span className="text-red-600">❤️</span> from India for
            the World
          </p>
        </div>
        <p className="text-center text-sm">
          © 2024 Talent ID (Brand of Hirexzo Solutions LLP) All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
