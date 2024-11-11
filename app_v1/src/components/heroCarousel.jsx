"use client";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    img: "slide1_desktop.png",
  
    alt: "Slide 1",
  },
  {
    id: 2,
    img: "slide2_desktop.png",
 
    alt: "Slide 2",
  },
  {
    id: 3,
    img: "slide3_desktop.png",

    alt: "Slide 3",
  },
  {
    id: 4,
    img: "slide4_desktop.png",

    alt: "Slide 4",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideInterval = 5000; // 5 seconds

  // Check screen width on resize to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              src={slide.img}
              alt={slide.alt}
              className="w-full md:h-96 h-[72px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 md:bg-gray-800 md:text-white md:p-2 rounded-full hover:bg-gray-700"
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 md:bg-gray-800 md:text-white md:p-2 rounded-full hover:bg-gray-700"
      >
        <MdOutlineNavigateNext />
      </button>

      {/* Indicators */}
      <div className="absolute md:bottom-4 bottom-[4px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`md:w-3 md:h-3  w-[2px] h-[2px] rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
