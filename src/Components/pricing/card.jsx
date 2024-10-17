import React from "react";

const Card = ({text,heading}) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="bg-green-200 p-3 rounded-full">
          <img
            src="/src/Images/pricing/people.png"
            alt="Icon"
            className="h-6 w-6"
          />
        </div>
      </div>
      <h2 className="text-gray-800 text-lg sm:text-xl font-bold text-center mb-4">
        {heading}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base text-center">
          {text}
      </p>
    </div>
  );
};

export default Card;
