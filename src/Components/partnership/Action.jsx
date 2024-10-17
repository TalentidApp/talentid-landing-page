import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-10 text-center">
      <h2 className="text-black text-4xl font-bold mb-4">Let's Grow Together🌱</h2>
      <button
        onClick={() => navigate("/contactus")}
        className="bg-purple-600 text-white py-2 px-6 rounded-full font-bold hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300"
      >
        Convinced? Get Started →
      </button>
      <div className="mt-8">
        <img
          src="/src/Images/partnership/img2.png"
          alt="Growth Image"
          className="mx-auto h-96"
        />
      </div>
    </section>
  );
};

export default CallToAction;
