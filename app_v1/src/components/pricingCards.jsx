"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { startTransition } from 'react';

const PricingCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Handle button click and show loader
  const handleRedirect = () => {
    startTransition(() => {
      setIsLoading(true); // Show loading spinner
      router.push("/contact"); // Redirect to /wholesale
    });
  };

  return (
    <>
      {/* Loading spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-800"></div>
        </div>
      )}

      <div className="mt-20 flex flex-col items-center justify-center font-cocoRegular">
        {/* Pricing Card 1 */}
        <div
          style={{
            backgroundImage: "url('/hawkvision_camera.png')", // Replace with a suitable URL
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Adds transparency
          }}
          className="md:h-36 h-32 w-80 md:w-96 lg:w-[700px]  lg:h-56 md:m-4 mt-6 bg-contain bg-center bg-no-repeat rounded-lg shadow-lg p-4 flex items-center justify-center hover:scale-110 transition-all duration-500"
        >
          <div className="text-center">
            <h3 className="md:text-xl font-semibold text-white mb-2">
              Affordable CCTV Prices
            </h3>
            <p className="text-sm text-white">
              Get the best surveillance cameras at unbeatable prices.
            </p>
            <button
              onClick={handleRedirect}
              className="bg-[#0096C7] md:text-md text-sm mt-2 text-white md:py-2 md:px-4 py-1 px-4 rounded-md hover:bg-[#0096C7]/60 transition duration-300"
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Pricing Card 2 */}
        <div
          style={{
            backgroundImage: "url('/cp_plus_image.png')", // Replace with a suitable URL
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds transparency
          }}
          className="md:h-36 h-32 w-80 md:w-96 lg:w-[700px] lg:h-56 md:m-4 mt-6 bg-contain bg-center bg-no-repeat rounded-lg shadow-lg p-4 flex items-center justify-center hover:scale-110 transition-all duration-500"
        >
          <div className="text-center">
            <h3 className="md:text-xl font-semibold text-white mb-2">
              Biometric System Prices
            </h3>
            <p className="text-sm text-white">
              Secure your office with the latest biometric technology at great
              rates.
            </p>
            <button
              onClick={handleRedirect}
              className="bg-[#0096C7] md:text-md text-sm mt-2 text-white md:py-2 md:px-4 py-1 px-4 rounded-md hover:bg-[#0096C7]/60 transition duration-300"
            >
             Contact us
            </button>
          </div>
        </div>

        {/* Pricing Card 3 */}
        <div
          style={{
            backgroundImage: "url('/hikvision_bio.png')", // Replace with a suitable URL
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Adds transparency
          }}
          className="md:h-36 h-32 w-80 md:w-96 lg:w-[700px] lg:h-56 md:m-4 mt-6 bg-contain bg-center bg-no-repeat rounded-lg shadow-lg p-4 flex items-center justify-center hover:scale-110 transition-all duration-500"
        >
          <div className="text-center">
            <h3 className="md:text-xl font-semibold text-white mb-2">
              Accessory Prices in Gurgaon
            </h3>
            <p className="text-sm text-white">
              Check out the most affordable prices for CCTV accessories in the
              region.
            </p>
            <button
              onClick={handleRedirect}
              className="bg-[#0096C7] mt-2 text-white md:py-2 md:px-4 py-1 px-4 md:text-md text-sm rounded-md hover:bg-[#0096C7]/60 transition duration-300"
            >
              Contact us 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
