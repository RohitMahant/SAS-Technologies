"use client";

import Carousel from "@/components/heroCarousel";
import { ProductCards1, ProductCards2 } from "@/components/productCards";
import { useState } from "react";
import ReviewCards from "@/components/reviewCards";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { useRouter } from "next/navigation";
import PricingCards from "@/components/pricingCards";
import { startTransition } from 'react'; 


export default function Home() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavClick = (path) => {
    startTransition(() => {
      setIsLoading(true); // Show loading spinner
      router.push(path); // Navigate programmatically
    });
  };
  return (
    <> {/* Loading spinner */}
    {isLoading && (
      <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-800"></div>
      </div>
    )}
    <div className=" font-cocoRegular">
      {/* <div className=" md:hidden relative h-20 bg-[#0096C7]/70 text-white">
        <h1 className="text-center p-4 text-2xl font-cocoBold bg-">Welcome to SAS Technologies</h1>
      </div> */}
      {/* Hero Section */}
      <Carousel />
      <div className="mt-12 m-4 md:mt-56 max-w-screen-lg mx-auto px-4">
        <h1 className=" text-gray-800 text-center text-3xl md:text-5xl font-cocoBold">
          Explore What We Offer in Gurgaon
        </h1>
        <p className=" md:text-2xl m-4">
          At our Gurgaon-based store, we specialize in providing advanced CCTV
          systems, top-tier biometric solutions, and high-performance alarm
          systems. Secure your premises with reliable, cutting-edge technology
          that’s designed for your safety and convenience.
        </p>
        <p className=" md:text-2xl m-4">
          Discover an extensive selection of CCTV cameras, biometric access
          control systems, premium quality cables, and robust connectors—all
          tailored to meet your security needs in Gurgaon and beyond.
        </p>
      </div>

      {/* Product Showcase */}
      <ProductCards1 />
      <div className="w-full max-w-screen-lg mx-auto px-4">
        <h1 className="text-center font-cocoBold md:mt-44 mt-16 md:text-3xl m-4">
          Your One-Stop Shop for Security Accessories in Gurgaon
        </h1>
        <p className="text-center md:text-2xl m-4">
          From durable racks and high-capacity hard drives to an extensive range
          of essential tools and accessories, we provide everything you need to
          create a complete and reliable security setup.
        </p>
      </div>
      <ProductCards2 />

      {/* Pricing Section */}
      <div className="w-full h-full justify-center items-center md:mt-44 mt-24 lg:gap-x-20">
        <div className="justify-center items-center mt-16">
          <h1 className="text-center font-cocoBold text-2xl md:text-5xl">
            Affordable Prices, Unbeatable Value in Gurgaon
          </h1>
          <h1 className="text-center font-cocoRegular md:text-3xl m-2 md:m-6">
            Shop confidently with us, knowing we offer competitive prices
            for both retail and wholesale buyers in Gurgaon and nearby areas.
          </h1>
          <div className="flex justify-center mt-8">
          <button
            onClick={() => handleNavClick("/wholesale")}
            className="flex items-center justify-center w-48 h-12 rounded-md bg-white text-green-600 font-semibold shadow-md hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 gap-x-2"
          >
            Go to Wholesale
          </button>
        </div>
          {/* Pricing Cards */}
          {/* <div className="mt-4 items-center justify-center">
            <div className="w-full md:flex justify-center">
              <div className="md:h-36 h-32 w-80 md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] bg-tertiary">
                <img
                  src="/prices_card1.png"
                  alt="Affordable CCTV prices"
                  className="h-full"
                />
              </div>
            </div>
            <div className="w-full md:flex justify-center">
              <div className="md:h-36 h-32 w-80  md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] mt-2 bg-tertiary">
                <img
                  src="/prices_card2.png"
                  alt="Biometric system prices"
                  className="h-full"
                />
              </div>
            </div>
            <div className="md:flex justify-center w-full">
              <div className="md:h-36 h-32 w-80  md:w-96 lg:w-[650px] lg:h-40 md:m-4 ml-[35px] mt-2 bg-tertiary">
                <img
                  src="/prices_card3.png"
                  alt="Accessory prices in Gurgaon"
                  className="h-full"
                />
              </div>
            </div>
          </div> */}
          <PricingCards/>
        </div>

        {/* Exclusive Brands Section */}
        <div className="w-full p-6 text-center mt-36">
          <h1 className="text-2xl md:text-5xl font-cocoBold">
            Premium Brands for Unmatched Security Solutions
          </h1>
          <p className="text-lg md:text-2xl mt-4">
            We are proud to be authorized resellers of globally trusted brands
            like Hikvision, CP Plus, and Hawkvision. Our extensive range ensures
            that every customer gets the best security solutions tailored to
            their requirements in Gurgaon.
          </p>
          <div className="relative overflow-hidden ">
           {/* Scrolling Brand Logos */}
       
            <div className="flex gap-12 md:animate-infinite-scroll animate-infinite-scroll-mobile">
              <img
                src="/Hikvision.svg"
                alt="Hikvision cameras in Gurgaon"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />

              <img
                src="/cp-plus.png"
                alt="CP Plus CCTV in Gurgaon"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              <img
                src="/wdsurveillance.png"
                alt="WD Surveillance hardrives in Gurgaon"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              <img
                src="/hawkvision.png"
                alt="Hawkvision cameras in Gurgaon"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />

              {/* Repeat logos */}

              <img
                src="/wdsurveillance.png"
                alt="WD Surveillance hardrives in Gurgaon"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />

              <img
                src="/Hikvision.svg"
                alt="Hikvision cameras in Gurgaon"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              <img
                src="/cp-plus.png"
                alt="CP Plus CCTV in Gurgaon"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
              <img
                src="/hawkvision.png"
                alt="Hawkvision cameras in Gurgaon"
                className="h-44 md:h-72 transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
          </div>
        </div>
 

      {/* About Us Section */}
      <div className="md:mt-20">
        <h1 className="text-center text-gray-800 text-3xl md:text-5xl font-cocoBold">
          About Us: Leaders in Security Systems in Gurgaon
        </h1>
      </div>
      <div>
        <div className="mt-12 m-6">
          <div className="w-full flex justify-center">
            <img
              src="/logo.png"
              alt="Gurgaon security systems logo"
              className=""
            />
          </div>
          <h1 className="text-center text-2xl md:text-5xl font-cocoBold">
            Your Satisfaction, Our Mission
          </h1>
          <p className="text-center md:text-2xl m-4">
            Operating since{" "}
            <span className="font-serif text-4xl font-bold">**2001**</span>,
            we’ve been trusted by thousands of satisfied customers in Gurgaon
            and beyond. Join our growing family of over **
            <span className="font-serif text-4xl font-bold">1000+</span>** happy
            clients.
          </p>
        </div>
      </div>

      {/* Customer Reviews */}
      <ReviewCards />

      {/* Contact Us Section */}
      <div className="relative bg-transparent p-10 md:mt-20 m-6 md:m-14">
        <h1 className="text-center text-2xl md:text-5xl font-cocoBold text-gray-700 leading-tight">
          Got Questions? <br /> We’re Here to Help
        </h1>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              router.push("/contact");
            }}
            className="flex items-center justify-center w-48 h-12 rounded-md bg-white text-green-600 font-semibold shadow-md hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 gap-x-2"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Quick Action Buttons */}
      <div className="md:hidden fixed bottom-4 right-4 z-30">
        <button
          onClick={() => (window.location.href = "tel:+1234567890")}
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <IoIosCall size={30} color="white" />
        </button>
        <button
          onClick={() => {
            router.push("/contact");
          }}
          className="w-14 h-14 rounded-full bg-red-800 flex mt-2 items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <IoIosMail size={30} color="white" />
        </button>
      </div>
    </div>
    </>
  );
}
