import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../Components/landing page/Footer";

const Header = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: "/src/Images/aboutus/customersLogo/Alpha ed logo.png",
      alt: "Alpha Ed Logo",
    },
    {
      src: "/src/Images/aboutus/customersLogo/BioreformLogo.png",
      alt: "Bio Reform Logo",
    },
    {
      src: "/src/Images/aboutus/customersLogo/gamology.jpg",
      alt: "Gamology Logo",
    },
    {
      src: "/src/Images/aboutus/customersLogo/Goodmind logo.webp",
      alt: "Goodmind Logo",
    },
    {
      src: "/src/Images/aboutus/customersLogo/Alpha ed logo.png",
      alt: "Alpha Ed Logo",
    },
    {
      src: "/src/Images/aboutus/customersLogo/BioreformLogo.png",
      alt: "Bio Reform Logo",
    },
    {
      src: "/src/Images/aboutus/customersLogo/gamology.jpg",
      alt: "Gamology Logo",
    },
    {
      src: "/src/Images/aboutus/customersLogo/Goodmind logo.webp",
      alt: "Goodmind Logo",
    },
  ];

  return (
    <div className="bg-white text-black">
      <nav className="py-10 px-4">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between rounded-3xl shadow-md bg-gradient-to-r from-gray-300 to-white">
          <div className="flex items-center">
            <img
              src="/src/Images/aboutus/logo1.png"
              alt="Employia Logo"
              className="h-10"
            />
          </div>
          <div>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-full font-bold">
              Log in
            </button>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <button className="text-lg pr-4">
            {/* <i className="fas fa-arrow-left"></i> */}
          </button>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            About Us
          </h2>
        </div>
      </nav>

      <div className="bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-md flex flex-col md:flex-row items-center">
          <div className="p-8 w-full md:w-3/4">
            <div className="text-base md:text-lg lg:text-xl text-justify">
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                Talent ID - HireXzo solutions LLP <br/> <br/> 
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                <ul className="space-y-4">
                  <li>
                    We were born from frustration. The traditional methods of
                    talent acquisition felt slow, clunky, and offered little
                    insight into the effectiveness of our efforts. We saw a
                    disconnect between the time and resources invested and the
                    quality of candidates we attracted.
                  </li>
                  <li>
                    We knew it had to be user-friendly,
                    data-driven, and powerful enough to transform the way
                    companies find and hire their best people.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="p-8 w-full md:w-1/4 flex justify-center">
            <img
              src="/src/Images/aboutus/Rectangle 203.png"
              alt="About Us Image"
              className="h-60 rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="text-center p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Talent ID’s Mission🎯
        </h1>
        <p className="mb-12 max-w-prose text-base md:text-lg lg:text-xl mx-auto">
        Talent ID aims to solve the problem of last minute dropouts and help 1000+ organizations make data driven solutions by 2025. 
        </p> 
     
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
          Helping business Grow
        </h2>
        <div className="space-y-4 mb-16">
          <Slider {...carouselSettings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <img src={image.src} alt={image.alt} className="h-28 mx-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Header;
