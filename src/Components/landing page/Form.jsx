import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Talentid.app?",
      answer:
        "Talentid.app is a SaaS product offering a Candidate Tracking System (CTS) tailored for startups and enterprises.",
    },
    {
      question: "How can Talentid.app help my business?",
      answer:
        "With advanced features like candidate engagement tools, data-driven analytics, and competitive intelligence insights, you'll gain a competitive edge in attracting and securing top talent.",
    },
    {
      question: "What are the key features of Talentid.app?",
      answer:
        "Key features include candidate engagement tools, data-driven analytics for assessing joining probability, competitive intelligence insights, and streamlined recruitment workflows.",
    },
    {
      question: "Is Talentid.app suitable for startups?",
      answer:
        "Yes, Talentid.app is designed to cater to both rapidly growing startups and established enterprises.",
    },
    {
      question: "Does Talentid.app offer customer support?",
      answer:
        "Yes, Talentid.app provides 24/7 customer support to assist you with any queries or issues.",
    },
    {
      question: "What is the pricing model of Talentid.app?",
      answer:
        "Talentid.app offers flexible pricing plans to cater to the needs of both startups and enterprises. Please contact our sales team for more information.",
    },
  ];

  return (
    <>
      <div>
        <div className="bg-[#e6daf8] flex flex-col text-center items-center py-12 px-6">
          <h4 className="text-3xl text-black font-extrabold">
            Grow with us as a partner🚀
          </h4>
          <p className="text-gray-700 text-lg font-light mt-2">
            We reached here with our hard work and dedication
          </p>
          <button
            onClick = {() => navigate("/partnership")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="mt-4 bg-black text-white py-2 px-8 rounded-full text-xl">
              Get Started
            </button>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap max-w-6xl mx-auto p-4 mt-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4">
          <h1 className="text-4xl font-bold text-center">
            Your questions? <br />
            <span className="text-purple-600">our solutions!</span>
          </h1>
          <div className="mt-6 w-full border border-gray-300 rounded-lg p-4">
            {faqs.map((faq, index) => (
              <div key={index} className="my-2">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full bg-white border border-gray-300 rounded-lg py-3 px-5 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span>{faq.question}</span>
                  <span>{openIndex === index ? "v" : ">"}</span>
                </button>
                {openIndex === index && (
                  <div className="bg-gray-100 border border-gray-300 rounded-lg py-3 px-5 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-500">
            Haven't seen yours?{" "}
            <a
              href="mailto:jai@talentid.app"
              className="text-blue-500 underline"
            >
              ask one
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dfz0wkqij/image/upload/v1719035921/dfiybwgkbxqmenormx8b.png"
            alt="Questions and Solutions Graphic"
            className="w-full h-100"
          />
        </div>
      </div>
    </>
  );
};

export default Form;
