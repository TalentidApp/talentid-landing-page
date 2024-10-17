import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-4 w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex flex-col max-w-6xl w-full py-4 px-4 bg-gray-200 rounded-lg shadow-md"
      >
        <div className="relative flex w-full justify-between items-center">
          <p className="text-base sm:text-lg relative text-black">{question}</p>
          <svg
            className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
              }`}
            width="20"
            height="20"
            fill="none"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="black"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {isOpen && (
          <div className="relative px-4 pt-2 pb-4 text-black bg-gray-50 rounded-b-lg w-full">
            <p className="relative text-wrap text-base sm:text-lg">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 100 credits free trial for all new users to explore our platform and features.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, UPI, Net Banking, Wallets, Paylater and bank transfers.",
    },
    {
      question: "How many pricing plans do you offer?",
      answer: "We offer three pricing plans: Starter, Business and Custom plans",
    },
    {
      question: "Can I upgrade my plan at any time?",
      answer:
        "Yes, you can upgrade your plan at any time by emailing us at support@talentid.app",
    },
    {
      question: "Do you offer custom pricing for large enterprises?",
      answer:
        "Yes, we provide custom pricing for large enterprises. Please contact our sales team support@talentid.app for more details.",
    },
  ];

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <div className="max-w-5xl w-full flex flex-col justify-center items-center gap-9">

        <div className="flex flex-col gap-2">

          <h2 className="text-2xl sm:text-4xl font-bold text-center text-black ">
            Frequently Asked Questions
          </h2>
          <div className="h-[2px] w-full bg-black mx-auto"></div>

        </div>
        <div className="relative w-full">
          {faqData.map((data, index) => (
            <FAQItem key={index} question={data.question} answer={data.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-white min-h-screen w-[100%] flex items-center justify-center">
      <FAQ />
    </div>
  );
}

export default App;
