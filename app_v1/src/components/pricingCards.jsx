import React from "react";

const PricingCards = () => {
  return (
    <div className="mt-20 items-center justify-center font-cocoRegular">
      <div className="w-full md:flex justify-center ">
        {/* Pricing Card 1 */}
        <div
          style={{
            backgroundImage: "url('/CP_UNC_VD41L3E_VMD.jpg')", // Replace with a suitable URL
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Adds transparency
          }}
          className="md:h-36 h-32 w-80 md:w-96 lg:w-[700px] lg:h-56 md:m-4 ml-[35px] mt-6 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg p-4 flex items-center justify-center hover:scale-110 transition-all duration-500 "
        >
          <div className="text-center">
            <h3 className="md:text-xl font-semibold text-white mb-2">
              Affordable CCTV Prices
            </h3>
            <p className="text-sm text-white ">
              Get the best surveillance cameras at unbeatable prices.
            </p>
            <button className="bg-[#0096C7] md:text-md text-sm mt-2 text-white md:py-2 md:px-4 py-1 px-4  rounded-md hover:bg-[#0096C7]/60 transition duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:flex justify-center">
        {/* Pricing Card 2 */}
        <div
          style={{
            backgroundImage: "url('/CP-Z43A.jpg')", // Replace with a suitable URL
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds transparency
          }}
          className="md:h-36 h-32 w-80 md:w-96 lg:w-[700px] lg:h-56 md:m-4 ml-[35px] mt-6 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg p-4 flex items-center justify-center hover:scale-110 transition-all duration-500"
        >
          <div className="text-center">
            <h3 className="md:text-xl font-semibold text-white mb-2">
              Biometric System Prices
            </h3>
            <p className="text-sm text-white">
              Secure your office with the latest biometric technology at great
              rates.
            </p>
            <button className="bg-[#0096C7] md:text-md text-sm mt-2 text-white md:py-2 md:px-4 py-1 px-4  rounded-md hover:bg-[#0096C7]/60  transition duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center w-full">
        {/* Pricing Card 3 */}
        <div
          style={{
            backgroundImage: "url('/CP-E44A.jpg')", // Replace with a suitable URL
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Adds transparency
          }}
          className="md:h-36 h-32 w-80 md:w-96 lg:w-[700px] lg:h-56 md:m-4 ml-[35px] mt-6 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg p-4 flex items-center justify-center hover:scale-110 transition-all duration-500"
        >
          <div className="text-center">
            <h3 className="md:text-xl font-semibold text-white mb-2">
              Accessory Prices in Gurgaon
            </h3>
            <p className="text-sm text-white ">
              Check out the most affordable prices for CCTV accessories in the
              region.
            </p>
            <button className="bg-[#0096C7] mt-2 text-white md:py-2 md:px-4 py-1 px-4  md:text-md text-sm rounded-md hover:bg-[#0096C7] /60 transition duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
