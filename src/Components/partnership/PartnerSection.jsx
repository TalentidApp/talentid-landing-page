import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const partners = [
  { id: 1, image: "/src/Images/partnership/ongrid.png" },
  { id: 2, image: "/src/Images/partnership/PocketHRMS.png" },
  { id: 3, image: "/src/Images/partnership/psyshell.png" },
  { id: 4, image: "/src/Images/partnership/screenit.png" }, // Add more partners as needed
];

const PartnerSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Hide the arrows
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

  return (
    <header className="bg-white text-center py-10">
      <div className="flex flex-col items-center">
        <h2 className="text-black text-3xl font-bold">Our Partners</h2>
        <p className="text-black text-lg">Let's build something great together</p>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <img
                src={partner.image}
                alt={`Partner ${partner.id}`}
                className="h-16"
              />
            </div>
          ))}
        </Slider>
      </div>
    </header>
  );
};

export default PartnerSection;
