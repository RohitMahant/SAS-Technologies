"use client";
import { useState ,useEffect} from "react";
import { IoCall, IoSend } from "react-icons/io5";
import Link from "next/link";

export default function Contact() {
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [query, setQuery] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [isVisible, setIsVisible] = useState(false);


  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

  const handleCall = () => {
    if (isMobile()) {
      window.location.href = `tel:${phoneNo || "9802012042"}`;
    } else {
      setShowDialog(true); // Show dialog for desktop users
    }
  };

  const closeDialog = () => setShowDialog(false);

  const closeSuccessDialog = () => setShowSuccessDialog(false);
  const closeErrorDialog = () => setShowErrorDialog(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state when the form is being submitted

    const data = {
      phoneNo,
      email,
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
        setShowSuccessDialog(true);
        setPhoneNo("");
        setEmail("");
        setQueryType("");
        setQuery("");
      } else {
        setShowErrorDialog(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowErrorDialog(true);
    } finally {
      setLoading(false); // Hide loading state after submission
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Start animating the content
    }, 800); // 2 seconds delay
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/contact_bg_img.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay",
      }}
      className="relative min-h-screen flex flex-col items-center justify-center font-cocoRegular text-gray-600"
    >
      <div className={`flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-32 m-4 lg:px-0 lg:space-x-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="w-full lg:w-2/3"> {/* Adjusted the width of the form container */}
          <div className="text-center px-4 lg:px-0">
            <h1 className="text-3xl lg:text-5xl text-white font-cocoRegular">
              CONTACT US
            </h1>
            <p className="text-white text-lg md:text-xl m-2">
              Send us your queries or call us
            </p>
            <p className="text-white text-lg md:text-xl m-2">
              We’re here to assist you
            </p>
          </div>

      {/* Show loading animation */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-10">
          <div className="spinner-border animate-spin border-t-transparent border-red-800 border-4 rounded-full w-16 h-16"></div>
        </div>
      )}
          <form
            onSubmit={handleSubmit}
            className="bg-transparent mt-6 w-full max-w-lg p-6 lg:p-8 font-cocoRegular"
          >
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="w-full border h-10 p-2 font-sans placeholder:text-sm outline-none focus:ring-0"
              required
              style={{ boxShadow: "none" }}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border h-10 mt-2 p-2 font-sans placeholder:text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096C7]/80"
              style={{ boxShadow: "none" }}
            />
            <select
              value={queryType}
              onChange={(e) => setQueryType(e.target.value)}
              className="mt-2 w-full border font-sans h-10 p-2 placeholder:text-sm outline-none focus:ring-0"
              required
            >
              <option value="" disabled>
                Query related to
              </option>
              <option value="product_not_available">Product not available</option>
              <option value="price">Price</option>
              <option value="other">Other doubts</option>
            </select>
            <textarea
              type="text"
              placeholder="Your query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-2 border w-full h-32 p-2 placeholder:text-sm outline-none focus:ring-0 font-sans resize-none"
              required
              style={{ boxShadow: "none" }}
            />
            <div className="justify-between items-center mt-4">
              <button
                type="submit"
                className="w-full md:w-full h-10 gap-x-3 flex justify-center items-center bg-white text-gray-700 border hover:bg-[#0096C7]/80 hover:text-white transition-all duration-500"
                disabled={loading} // Disable button when loading
              >
                <span>Send</span>
                <IoSend size={25} />
              </button>
              <h1 className="text-center m-2">or</h1>
              <button
                type="button"
                className="w-full md:w-full h-10 gap-x-3 flex justify-center items-center bg-white text-gray-700 border hover:bg-[#0096C7]/80 hover:text-white transition-all duration-500"
                onClick={handleCall}
              >
                Call
                <IoCall size={25} />
              </button>
            </div>
          </form>
        </div>
        <div 
          style={{
            backgroundImage: "url('/map.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundBlendMode: "overlay",
          }}
          className="h-56 w-full lg:w-2/3 lg:h-80 m-6 rounded-lg flex justify-center items-end" 
        >
          <Link
          target="_blank"
            href="https://www.google.com/maps/search/X%2F508,First+Floor,Ashok+Puri,Near+Bagga+Sales,New+Railway+Road,Gurugram+-+122+001/@28.4712229,77.0192435,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTExOS4wIKXMDSoASAFQAw%3D%3D"
            className="flex items-center justify-center w-48 h-12 rounded-md bg-white text-green-600 font-semibold shadow-md hover:bg-[#0096C7]/80 hover:text-white transition-all duration-500 border border-white gap-x-2 m-4"
          >
          
            Visit
         
         
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center font-sans lg:mt-20 m-10 lg:px-0 text-center text-white">
        <h2 className="text-2xl lg:text-3xl mb-4">Our Address</h2>
        <p>X/508,First Floor,Ashok Puri,</p>
        <p>Near Bagga Sales,New Railway Road,</p>
        <p>Gurugram - 122 001 (Haryana)</p>
        <h2 className="text-2xl lg:text-3xl font-cocoRegular mt-8 mb-4">
          Business Hours
        </h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <p className="text-lg text-green-600">Query sent successfully!</p>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              onClick={closeSuccessDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}

     {/* Error Dialog */}
{showErrorDialog && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 transition-opacity duration-300">
    <div className="bg-red-600 text-white rounded-lg p-4 shadow-md w-full max-w-xs text-center opacity-100 scale-100 transition-all duration-300 transform">
      <p className="text-sm font-medium">Something went wrong!</p>
      <p className="mt-1 text-xs">We couldn&apos;t send your query. Please check your details.</p>
      <button
        className="mt-4 px-4 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-red-600 transition"
        onClick={closeErrorDialog}
      >
        Close
      </button>
    </div>
  </div>
)}


      {/* Call Dialog */}
      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <a
              href="tel:+919802012042"
              className="bg-green-600 text-white py-3 px-10 rounded-md hover:bg-green-700 transition"
            >
              Call Us
            </a>
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
