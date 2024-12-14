import { useEffect, useState } from "react";

export default function StickyDistributorBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility after component mounts
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <div
      className={`fixed md:bottom-4 bottom-72 right-4 z-30 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-44 h-44 md:w-96 md:h-96 rounded-full flex items-center justify-center">
        {/* Blurred Background */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white bg-opacity-50 backdrop-blur-md"></div>

        {/* Image */}
        <img
          src="/prama.png" // Replace with the actual image path
          alt="Now an Authorised PRAMA Distributor"
          className="absolute top-0 left-0 w-full h-full object-contain z-10"
        />

        {/* Text */}
        <div className="absolute bottom-6 w-52 md:w-5/6 bg-gradient-to-r from-orange-500 via-white to-green-500 text-center py-2 rounded-md shadow-md z-20">
          <h1 className="text-black font-cocoBold font-semibold text-sm sm:text-xl">
            Now a PRAMA Authorised Distributor
          </h1>
        </div>
      </div>
    </div>
  );
}
