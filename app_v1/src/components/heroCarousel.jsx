"use client";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState, useEffect } from "react";

const slides = [
  { id: 1, img: "slide1_desktop.png", alt: "Desktop Slide 1", type: "desktop" },
  { id: 2, img: "slide2_desktop.png", alt: "Desktop Slide 2", type: "desktop" },
  { id: 3, img: "slide3_desktop.png", alt: "Desktop Slide 3", type: "desktop" },
  { id: 4, img: "slide4_desktop.png", alt: "Desktop Slide 4", type: "desktop" },
  { id: 5, img: "slide1_mobile.png", alt: "Mobile Slide 1", type: "mobile" },
  { id: 6, img: "slide2_mobile.png", alt: "Mobile Slide 2", type: "mobile" },
  { id: 7, img: "slide3_mobile.png", alt: "Mobile Slide 3", type: "mobile" },
  { id: 8, img: "slide4_mobile.png", alt: "Mobile Slide 4", type: "mobile" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideInterval = 5000; // 5 seconds

  // Filter slides based on screen type
  const filteredSlides = slides.filter((slide) =>
    isMobile ? slide.type === "mobile" : slide.type === "desktop"
  );

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
      setCurrentIndex((prevIndex) =>
        prevIndex === filteredSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, filteredSlides.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredSlides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full bg-secondary md:h-80 lg:h-96 h-72 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {filteredSlides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img
              src={`/${slide.img}`}
              alt={slide.alt}
              className="w-full md:h-96 h-[300px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 md:text-white md:p-2 rounded-full hover:bg-gray-700"
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 md:text-white md:p-2 rounded-full hover:bg-gray-700"
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
}
