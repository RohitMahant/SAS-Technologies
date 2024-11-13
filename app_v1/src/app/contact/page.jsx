"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import { IoCall, IoSend } from "react-icons/io5";

export default function Contact() {
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [query, setQuery] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

  const handleCall = () => {
    if (isMobile()) {
      window.location.href = `tel:${phoneNo || "8756385493"}`;
    } else {
      setShowDialog(true); // Show dialog for desktop users
    }
  };

  const closeDialog = () => setShowDialog(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      phoneNo,
      queryType,
      query,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Query sent successfully!");
        setPhoneNo("");
        setQueryType("");
        setQuery("");
      } else {
        alert("Failed to send query.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative justify-center min-h-screen bg-primary font-cocoRegular text-gray-600">
      {/* Flex container for form and image side by side on lg screens */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-32 m-4 lg:px-0 lg:space-x-8">
        <div>
          <div className="text-center px-4 lg:px-0">
            <h1 className="text-3xl lg:text-5xl text-gray-700 font-cocoRegular">
              CONTACT US
            </h1>
            <p className="text-gray-600 text-lg md:text-xl m-2">
              Send us your queries or call us
            </p>
            <p className="text-gray-600 text-lg md:text-xl m-2">
              We’re here to assist you
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-secondary mt-6  w-full  max-w-lg p-6 lg:p-8 rounded shadow-lg font-mergeOne"
          >
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="w-full h-10 p-2 rounded placeholder:text-sm outline-none focus:ring-0"
              required
              style={{ boxShadow: "none" }}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 mt-2 p-2 rounded placeholder:text-sm outline-none focus:ring-0"
              style={{ boxShadow: "none" }}
            />
            <select
              value={queryType}
              onChange={(e) => setQueryType(e.target.value)}
              className="mt-2 w-full h-10 p-2 rounded placeholder:text-sm outline-none focus:ring-0"
              required
            >
              <option value="" disabled>
                Query related to
              </option>
              <option value="product_not_available">
                Product not available
              </option>
              <option value="price">Price</option>
              <option value="other">Other doubts</option>
            </select>
            <textarea
              type="text"
              placeholder="Your query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-2 w-full h-32 p-2 rounded placeholder:text-sm outline-none focus:ring-0 resize-none"
              required
              style={{ boxShadow: "none" }}
            />
            <div className="flex justify-between mt-4">
              {/* Call Button */}
              <button
                type="button"
                className="w-32 md:w-48 h-10 gap-x-3 flex justify-center items-center bg-red-800 text-white rounded hover:bg-red-900 transition"
                onClick={handleCall}
              >
                Call
                <IoCall size={30} />
              </button>

              {/* Send Button */}
              <button
                type="submit"
                className="w-32 md:w-48 h-10 gap-x-3 flex justify-center items-center bg-red-800 text-white rounded hover:bg-red-900 transition"
              >
                <span>Send</span>
                <IoSend size={30} />
              </button>
            </div>
          </form>
        </div>

        {/* Company image */}
        <div className="md:mt-16 m-10 mb-4 w-full lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMvNRvaSVLUgJOfRNBMMKEWxrwCXPAQ6kyvXPOj=s680-w680-h510"
            alt="Company Building"
            className="h-52 w-[700px] lg:h-[500px] md:h-[300px] lg:w-[700px] md:w-[700px] rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Address and Business Hours */}
      <div className="flex flex-col items-center lg:mt-20 px-6 m-10 lg:px-0 text-center text-white">
        <h2 className="text-2xl lg:text-3xl font-mergeOne mb-4">Our Address</h2>
        <p>1234 Technology Drive,</p>
        <p>Building 4, Suite 300,</p>
        <p>Innovation City, CA 90210, USA</p>

        <h2 className="text-2xl lg:text-3xl font-mergeOne mt-8 mb-4">
          Business Hours
        </h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      {/* Modal Dialog */}
      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Call Us</h2>
            <p className="text-sm mb-6">
              Call us here: <strong>8756385493</strong>
            </p>
            <button
              className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900 transition"
              onClick={closeDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
