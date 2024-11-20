"use client";
import { useState, useEffect } from "react";

export default function Wholesale() {
  const [formData, setFormData] = useState({
    firmName: "",
    firmAddress: "",
    phoneNumber: "",
    email: "",
    products: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Start animating the content
    }, 800); // 2 seconds delay
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat hover:shadow-lg font-cocoRegular md:flex items-center gap-x-16 justify-center bg-primary px-4 py-10"
      style={{
        backgroundImage: "url('/wholesale_bg_img.jpeg')", // Replace with a suitable URL
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Adds transparency
      }}
    >
      {/* Content and animations */}
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h1 className="text-center text-xl font-semibold m-3 text-white">
          Are you a dealer looking to place a bulk order?
        </h1>
        <h1 className="text-center text-xl font-semibold m-3 text-white">
          Let us know a bit about your firm
        </h1>
        <h1 className="text-md text-center font-semibold m-3 text-white">
          We understand the needs of a reputed Dealer.
        </h1>
        <h1 className="text-md text-center font-semibold m-3 text-white">
          Here at SAS Technologies, our services extend graciously to wholesale.
        </h1>
      </div>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className={`bg-white shadow-lg p-6 mt-12 w-full max-w-md transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-2xl font-bold mb-2 text-center">Wholesale Inquiry</h1>
          <hr className="mb-3" />
          <div className={`mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <label
              htmlFor="firmName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Firm Name
            </label>
            <input
              type="text"
              id="firmName"
              name="firmName"
              value={formData.firmName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096C7]/80"
            />
          </div>
          <div className={`mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <label
              htmlFor="firmAddress"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Firm Address
            </label>
            <input
              type="text"
              id="firmAddress"
              name="firmAddress"
              value={formData.firmAddress}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096C7]/80"
            />
          </div>
          <div className={`mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 font-serif focus:outline-none focus:ring-2 focus:ring-[#0096C7]/80"
            />
          </div>
          <div className={`mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 font-serif focus:outline-none focus:ring-2 focus:ring-[#0096C7]/80"
            />
          </div>
          <div className={`mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <label
              htmlFor="products"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Products Interested In
            </label>
            <textarea
              id="products"
              name="products"
              value={formData.products}
              onChange={handleChange}
              required
              className="w-full p-2 border resize-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096C7]/80"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-transparent border text-gray-800 font-medium py-2 hover:bg-[#0096C7]/80 hover:text-white transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className={`bg-[#0096C7]/60 shadow-lg p-6 w-full max-w-md text-white text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
          <p className="mb-4">We&apos;ll contact you soon.</p>
          <p className="mb-6">Would you like to call us?</p>
          <a
            href="tel:+1234567890"
            className="bg-green-600 text-white py-3 px-10 rounded-md hover:bg-green-700 transition"
          >
            Call Us
          </a>
        </div>
      )}
    </div>
  );
}
