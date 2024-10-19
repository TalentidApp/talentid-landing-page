import React, { useState } from "react";
import {
    FaBuilding,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaUser,
} from "react-icons/fa";
import Header from "../Components/header";
import Footer from "../Components/footer";

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row justify-center items-center p-6 bg-gray-100">
        <div className="bg-white p-10 rounded-l-[24px] shadow-lg max-w-md ">
          <h2 className="text-2xl font-bold mb-2" style={{ fontWeight: 800 }}>
            Contact us
          </h2>
          <p className="mb-4 max-w-[300px]">
            We can help your team hire better and faster.
          </p>
          <div className="mb-4 flex items-center gap-4">
            <p className="font-semibold">
              <FaEnvelope />
            </p>
            <p>Support@talentid.app</p>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <p className="font-semibold">
              <FaPhoneAlt />
            </p>
            <p>+91 7799112167, 9505001969</p>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <p className="font-semibold">
              <FaMapMarkerAlt />
            </p>
            <p>
              HireXzo solutions LLP, Balaji Nagar, Mallapur, Balapur, RCI Road,
              Hyderabad Telangana, India - 500005
            </p>
          </div>
        </div>
        <div
          className=" p-6 rounded-[24px] border border-black shadow-lg max-w-md md:mt-0"
          style={{ backgroundColor: " rgba(208, 172, 255, 0.67)" }}
        >
          <h2 className="text-2xl font-semibold" style={{ fontWeight: 800 }}>
            Get in touch
          </h2>
          <label className="block text-md mb-4">You can reach us Anytime</label>
          <form>
            <div className="md:flex gap-2">
              <div className="mb-4">
                <FaUser className="absolute text-[15px] mt-3.5 ml-[15px]" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="mainLoginInput pl-10 w-full p-2 border border-black rounded-[41px] border-black-300"
                />
              </div>
              <div className="mb-4">
                <FaBuilding className="absolute  text-[15px] mt-3.5 ml-[15px]" />
                <input
                  type="text"
                  placeholder="Company"
                  className="mainLoginInput pl-10 w-full p-2 border border-black rounded-[41px] border-black-300"
                />
              </div>
            </div>

            <div className="mb-4">
              <FaEnvelope className="absolute  text-[15px] mt-3 ml-[15px]" />
              <input
                type="email"
                placeholder="Enter your mail here"
                className="mainLoginInput pl-10 w-full p-2 border border-black rounded-[41px] border-black-300"
              />
            </div>
            <div className="mb-4">
              <h1 className="absolute font-bold text-[15px] pr-2 mt-3 ml-[15px]">
                +91
              </h1>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="mainLoginInput pl-14 w-full p-2 border border-black rounded-[41px] border-black-300"
              />
            </div>
            <h2 className="block text-md font-bold mb-2">How can we help?</h2>
            <div className="mb-4 bg-white border border-black p-2 rounded-[26px]">
              <div className="flex flex-wrap space-x-2 space-y-2">
                <label className="flex items-center mt-2">
                  <input
                    type="radio"
                    name="help"
                    value="Pricing Query"
                    checked={selectedOption === "Pricing Query"}
                    onChange={handleOptionChange}
                    className="mr-[2px] ml-[6px]"
                  />
                  Pricing Query
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="help"
                    value="Partnership issues"
                    checked={selectedOption === "Partnership issues"}
                    onChange={handleOptionChange}
                    className="mr-[2px]"
                  />
                  Partnership issues
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="help"
                    value="Affiliate program"
                    checked={selectedOption === "Affiliate program"}
                    onChange={handleOptionChange}
                    className="mr-[2px]"
                  />
                  Affiliate program
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="help"
                    value="Integration partnership"
                    checked={selectedOption === "Integration partnership"}
                    onChange={handleOptionChange}
                    className="mr-[2px]"
                  />
                  Integration partnership
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="help"
                    value="Book a demo"
                    checked={selectedOption === "Book a demo"}
                    onChange={handleOptionChange}
                    className="mr-[2px]"
                  />
                  Book a demo
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="help"
                    value="Others"
                    checked={selectedOption === "Others"}
                    onChange={handleOptionChange}
                    className="mr-[2px]"
                  />
                  Others
                </label>
              </div>
              <div className="mb-4">
                <textarea
                  className="w-[98%] p-4 border border-black mt-4 rounded-[26px] resize-none flex justify-center mx-auto"
                  placeholder="Message here..."
                  rows="4"
                ></textarea>
              </div>{" "}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 rounded-[26px]  text-white p-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
