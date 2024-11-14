"use client";
import { useState } from "react";

export default function Wholesale() {
  const [formData, setFormData] = useState({
    firmName: "",
    firmAddress: "",
    phoneNumber: "",
    email: "",
    products: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send `formData` to your backend if needed
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-cocoRegular md:flex items-center justify-center bg-primary px-4 py-10">
      <h1 className="text-center text-xl font-semibold m-3">
        Are you a dealer looking to place a bulk order?
      </h1>
      <h1 className="text-center text-xl font-semibold m-3">
        Let Us know a bit about your firm
      </h1>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg p-6 mt-12 w-full max-w-md"
        >
        
          <h1 className="text-2xl font-bold mb-2 text-center">
            Wholesale Inquiry
          </h1>
          <hr className="mb-3"/>
          <div className="mb-4">
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
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
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
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
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
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
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
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
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
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-transparent border text-gray-800 font-medium py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
          <p className="mb-4">We have your information.</p>
          <p className="mb-6">Would you like to call us?</p>
          <a
            href="tel:+1234567890"
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Call Us
          </a>
        </div>
      )}
    </div>
  );
}
