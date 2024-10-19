import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const navigate = useNavigate();

  const pricing = {
    starter: {
      monthly: 5000,
    },
    business: {
      yearly: 50000,
    },
    custom: {
      monthly: "Let’s Talk",
      yearly: "Let’s Talk",
    },
  };

  const customData = [

    "Unlimited credits",
    "Custom integrations",
    "Dedicated account manger",
    "Early access to the new feature",
    "Priority email + call support "
  ]

  return (
    <div className="bg-gradient-to-t from-gray-300 to-white text-black min-h-screen">
      <Header />

      <div className="py-5 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            <span>Get started at no cost</span>
            <br />
            <span>then pay as you go.</span>

          </h1>
          <p className="text-gray-800 mb-6 sm:mb-10 text-lg sm:text-xl">
            We offer flexible pricing plans to suit businesses of all sizes.
          </p>

          <div className="flex justify-center mb-6 sm:mb-10">
            <div className="inline-flex border-2 border-black rounded-full overflow-hidden">
              <button
                className={`px-10 py-2 sm:px-20 sm:py-3 font-bold focus:outline-none ${
                  billingCycle === "monthly"
                    ? "bg-purple-800 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-10 py-2 sm:px-24 sm:py-3 font-bold focus:outline-none ${
                  billingCycle === "yearly"
                    ? "bg-purple-800 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
            {/* Starter Plan */}
            <div className="pricing-card border-2 border-purple-800 rounded-xl shadow-lg p-6 bg-white w-full sm:w-96 text-left transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="bg-purple-800 text-white font-bold rounded-full px-4 py-1 inline-block mb-4">
              {billingCycle === "monthly"
                  ? "Starter"
                  : "Business"}
              </div>
              <p className="text-lg mb-4">
              Suitable for small businesses, That has low hiring frequency.
              </p>
              <h2 className="text-4xl font-bold">
                ₹
                {billingCycle === "monthly"
                  ? pricing.starter.monthly
                  : pricing.business.yearly}
              </h2>
              <p className="text-gray-600 mb-4">Per user/{billingCycle}</p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <span className="text-purple-800 mr-2">✔</span>
                  {billingCycle === "monthly"
                  ? "100 credits"
                  : "1200 credits"}
                </li>
                <li className="flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <span className="text-purple-800 mr-2">✔</span>
                  Custom integrations
                </li>
                <li className="flex items-center mb-6 pb-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <span className="text-purple-800 mr-2">✔</span>
                  Priority support
                </li>
              </ul>
              <button className="bg-purple-800 text-white font-bold px-6 py-2 rounded-full w-full">
                Start a free trial
              </button>
              <a href="#" className="text-gray-500 mt-1 text-xs cursor-pointer">
                Terms & Conditions Apply
              </a>
            </div>

            {/* Custom Plan */}
            <div className="pricing-card border-2 border-purple-800 rounded-xl shadow-md p-6 bg-white w-full sm:w-80 text-left transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="bg-purple-800 text-white font-bold rounded-full px-4 py-1 inline-block mb-2">
                Custom
              </div>
              <p className="text-sm mb-4">
                For teams that require collaborative recruitment solutions.
              </p>
              <h2 className="text-2xl font-bold">
                {pricing.custom[billingCycle]}
              </h2>
              <p className="text-gray-600 text-xs mb-4">
                Per user/{billingCycle}
              </p>
      
              <ul className="mb-4 space-y-2 text-xs">

                {

                  customData.map((data)=>(

                  <li className="flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <span className="text-purple-800 mr-2">✔</span>
                      {data}
                  </li>

                  ))

                }
              </ul>
              <button onClick={() => navigate("/contactus")} className="bg-gray-400 text-white font-bold px-6 py-2 rounded-full w-full">
                Talk to sales
              </button>
              <a href="#" className="text-gray-500 mt-1 text-xs cursor-pointer">
                Terms & Conditions Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
