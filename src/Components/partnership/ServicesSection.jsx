import React from "react";
import { useNavigate } from "react-router-dom";


const services = [
  {
    id: 1,
    title: "Parternship",
    description:
      "Our candidate tracking system collaborates with a range of partners to enhance its capabilities and reach. By working together, we ensure a seamless experience for our users, integrating cutting-edge technologies and industry expertise.",
    icon: "/src/Images/partnership/Icon.png",
  },
  {
    id: 2,
    title: "Integration Partner",
    description:
      "As an integration partner, we connect with various platforms and tools to create a unified hiring ecosystem. This integration streamlines data flow, enhances functionality, and provides a cohesive user experience across all your hiring processes.",
    icon: "/src/Images/partnership/Icon.png",
  },
  {
    id: 3,
    title: "Channel Partner",
    description:
      "Our channel partners help extend our reach to new markets and customers. By leveraging their networks and expertise, we can deliver our candidate tracking solutions to a broader audience, ensuring more companies benefit from our advanced hiring technology.",
    icon: "/src/Images/partnership/Icon.png",
  },
  {
    id: 4,
    title: "Event Collaboration",
    description:
      "We collaborate with industry events and conferences to showcase our candidate tracking system and share insights with professionals. These collaborations allow us to connect with potential clients, stay updated on industry trends, and contribute to the growth of the hiring community.",
    icon: "/src/Images/partnership/Icon.png",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-6 px-2 md:px-10">
      <h2 className="text-black text-3xl font-bold mb-8 text-center underline">
        Helping Business Grow
      </h2> 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 gap-x-0 justify-center justify-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border-2 border-blue-400 transition-transform transform duration-300 hover:scale-105"
            style={{ maxWidth: "400px", maxHeight: "350px" }}
          >
            <img src={service.icon} alt="Service Icon" className="h-16 mb-4" />
            <h3 className="text-black text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-justify">
              {service.description}
            </p>
            <button
            onClick={() => navigate("/contactus")}
              className="bg-purple-500 text-white py-2 px-4 rounded-full font-bold mt-auto"
            >
              Become a Partner &rarr;
            </button>
            {/* <Link to="/contactus" className="bg-purple-500 text-white py-2 px-4 rounded-full font-bold mt-auto">Become a Partner</Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
