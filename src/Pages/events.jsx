import React, {useState} from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import event1 from "../Images/events/event1.png";
import event2 from "../Images/events/event2.png";
import event3 from "../Images/events/event3.png";
import event4 from "../Images/events/event4.png";
import event5 from "../Images/events/event5.png";
import event6 from "../Images/events/event6.png";
import event7 from "../Images/events/event7.png";
import event8 from "../Images/events/event8.png";
import event9 from "../Images/events/event9.png";
import event10 from "../Images/events/event10.png";
import event11 from "../Images/events/event11.png";
import event12 from "../Images/events/event12.png";
import event13 from "../Images/events/event13.png";
import event14 from "../Images/events/event14.png";
import event15 from "../Images/events/event15.png";
import event16 from "../Images/events/event16.png";


function events() {

    const images = [
        event1,
        event2,
        event3,
        event4,
        event5,
        event6,
        event7,
        event8,
        event9,
        event10,
        event11,
        event12,
        event13,
        event14,
        event15,
        event16,

        // Add paths to other images here
      ];

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedImage, setSelectedImage] = useState(null);

      const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
      };

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto px-0 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 mt-0">Photos/Videos</h1>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Photos</h2>
          <hr className="border-t-2 border-gray-300 mb-8" />

          <div className="grid grid-cols-3 gap-4 mb-16">
            {/* {Array.from({ length: 13 }).map((_, idx) => (
              <div key={idx} className="h-48 bg-gray-200">
                Image {idx + 1}
              </div>
            ))} */}
            {images.map((image, idx) => (
            <div key={idx} className="h-48">
              <img src={image} alt={`Event ${idx + 1}`} className="w-full h-full object-cover cursor-pointer" onClick={() => openModal(image)}  />
            </div>
          ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Videos</h2>
          <hr className="border-t-2 border-gray-300 mb-8" />

          <div className="my-20 flex justify-center items-center">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/eyvR7hCaB1Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        </div>

        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Enlarged event" className="max-w-screen-lg max-h-screen" />
            <button
              className="absolute top-5 right-5 bg-black text-white p-2"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  );
}

export default events;
