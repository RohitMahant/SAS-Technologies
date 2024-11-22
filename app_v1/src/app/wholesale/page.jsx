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
  const [loading, setLoading] = useState(false); // Loading state
  const [showErrorDialog, setShowErrorDialog] = useState(false); // Error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Show loading spinner when the form is submitted

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true); // Set submitted state to true if email is sent successfully
      } else {
        // If there's an error (non-2xx status code), show the error dialog
        setShowErrorDialog(true);
        console.log(data.error);
      }
    } catch (error) {
      setShowErrorDialog(true); // Show error if there's an issue with the request
      console.error("Error:", error);
    } finally {
      setLoading(false); // Hide loading spinner after request completes
    }
  };

  const closeErrorDialog = () => {
    setShowErrorDialog(false); // Close error dialog
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
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
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

      {/* Show loading animation */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-10">
          <div className="spinner-border animate-spin border-t-transparent border-red-800 border-4 rounded-full w-16 h-16"></div>
        </div>
      )}

      {/* Error Dialog */}
      {showErrorDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-red-600 text-white rounded-lg p-4 shadow-md w-full max-w-xs text-center opacity-100 scale-100 transition-all duration-300">
            <p className="text-sm font-medium">Oops! Something went wrong.</p>
            <p className="mt-1 text-xs">
              We couldn&apos;t send your query. Please Check your details.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-red-600 transition"
              onClick={closeErrorDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Success Dialog */}
      {submitted && (
        // <div className={`bg-[#0096C7]/60 shadow-lg p-6 w-full max-w-md text-white text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        //   <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        //   <p className="mb-4">We&apos;ll contact you soon.</p>
        //   <p className="mb-6">Would you like to call us?</p>
        //   <a
        //     href="tel:+919802012042"
        //     className="bg-green-600 text-white py-3 px-10 rounded-md hover:bg-green-700 transition"
        //   >
        //     Call Us
        //   </a>
        // </div>
        <div className="fixed inset-0 flex items-center justify-center w-full h-screen z-50 bg-black bg-opacity-40">
          <div className="bg-[#0096C7]/80 text-white rounded-lg p-4 shadow-md w-full max-w-xs text-center opacity-100 scale-100 transition-all duration-300">
            <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
            <p className="mt-1 text-xs">We&apos;ll contact you soon.</p>
            <p className="mt-1 text-xs">Would you like to call us?</p>
            <div className="flex flex-col">
            <button
              className="mt-4 px-3 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white  transition"
            >
              <a
                href="tel:+919802012042"
                className=" text-white hover:text-black py-3 px-10 rounded-md transition"
              >
                Call Us
              </a>
            </button>
            <button
              className="mt-4 px-3 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition"
              onClick={setSubmitted(false)}
            >
             Close
            </button>
            </div>
          </div>
        </div>
      )}

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className={`bg-white shadow-lg p-6 mt-12 w-full max-w-md transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl font-bold mb-2 text-center">
            Wholesale Inquiry
          </h1>
          <hr className="mb-3" />
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
              className="w-full font-sans p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096C7]/80"
            />
          </div>
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
        ""
      )}
    </div>
  );
}
