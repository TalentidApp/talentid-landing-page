import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white text-black">
      <nav className="py-10 px-4">
        <div className="max-w-3xl mx-auto px-9 py-3 flex items-center justify-between rounded-3xl shadow-md bg-gradient-to-r from-gray-300 to-white">
          <div className="flex items-center">
            <img
              src="/src/Images/partnership/logo1.png"
              alt="Employia Logo"
              className="h-10"
            />
          </div>
          <div>
            <button className="bg-purple-800 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition duration-300">
              Log in
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gray-50 py-2 flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center py-4">
          <div className="p-10 md:w-1/2">
            <div className="text-xl text-justify">
              <div className="flex items-center mb-4">
                {/* <button className="mr-4">
                  <img
                    src="/src/Images/partnership/backArrow.png"
                    alt="Back Arrow"
                    className="h-6"
                  />
                </button> */}
                <h3 className="font-bold text-3xl">
                  Help your clients hire better🤝
                </h3>
              </div>
              <p className="text-base">
                You're looking to grow your business, and we're here to help
                with the Talent ID partner program. Join the Talent ID
                family, and start providing HR services to clients around the
                world. Whether you're working with a staffing agency or internal
                HR, you can monetize your knowledge and grow with your
                customers.
              </p>
              <div className="mt-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full font-bold hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300"
                  onClick={() => window.location.href = '/contactus'}>
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2 flex justify-center">
            <img
              src="/src/Images/partnership/Rectangle.png"
              alt="About Us Image"
              className="h-64 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;