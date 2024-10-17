import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 mt-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 bg-gray-200 rounded-lg shadow-md flex justify-between items-center"
      >
        <span className="text-lg text-black">{question}</span>
        <svg
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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
      </button>
      {isOpen && (
        <div className="px-4 pt-2 pb-4 text-black bg-gray-50 rounded-b-lg w-full">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How do I become a partner with talentid.app?",
      answer: "You can contact our sales team through our website or email us at partners@talentid.app. We'd be happy to discuss your needs and how we can partner for success."
    },
    {
      question: "Can we use talentid.app for internal recruitment as well as external hiring?",
      answer: "Absolutely! Talentid.app is a versatile platform that can be used for both internal and external recruitment. You can track applications, and collaborate with hiring managers effectively."
    },
    {
      question: "Do I need to pay anything to join the partner program?",
      answer: "No joining fee! It’s absolutely free."
    },
    {
      question: "What kind of marketing materials can I expect to receive as a partner?",
      answer: "As a partner, you'll have access to a variety of marketing materials, including joint press releases, social media content, and branded collateral. These materials will help you promote your partnership and reach a wider audience."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-black underline">
        Frequently asked questions
      </h2>
      <div>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <FAQ />
    </div>
  );
}

export default App;
