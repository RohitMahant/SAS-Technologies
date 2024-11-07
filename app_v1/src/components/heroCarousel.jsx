"use client"
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { useState, useEffect } from "react";

const slides = [
  { id: 1, image: "slide1.jpg", alt: "Slide 1" },
  { id: 2, image: "slide2.jpg", alt: "Slide 2" },
  { id: 3, image: "slide3.jpg", alt: "Slide 3" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // 3 seconds

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, slideInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full bg-secondary md:h-80 lg:h-96 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <GrFormPrevious/>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <MdOutlineNavigateNext/>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
